import {
  createOrGetRoom,
  getRoomData,
  addWordToRoom,
  removeWordFromRoom,
  watchRoom,
  stopWatchingRoom,
  clearAllWordsInRoom,
  addDefaultWordsToRoom,
  setCurrentRoom,
  getCurrentRoom
} from './firestore.js';

// 言葉を保存するデータ構造（Firestoreから同期）
const wordDatabase = {
    '5': [],
    '7': []
};

// 使用済みの言葉を記録
const usedWords = {
    '5': [],
    '7': []
};

// デフォルトの言葉を取得
function getDefaultWords() {
    return {
        '5': [
            '春の海',
            '古池や',
            '柿食えば',
            '閑さや',
            '夏草や',
            '雪とけて',
            '秋深き',
            '名月や',
            'のたりかな',
            '水の音',
            '法隆寺',
            '蝉の声',
            '夢の跡',
            '子どもかな',
            '人を訪はば',
            '遠き山'
        ],
        '7': [
            'ひねもすのたり',
            '蛙飛び込む',
            '鐘が鳴るなり',
            '岩にしみ入る',
            '兵どもが夢の跡',
            '村一杯の子どもかな',
            '隣は何をする人ぞ',
            '池をめぐりて'
        ]
    };
}

// ルームに参加
window.joinRoom = async function() {
    const input = document.getElementById('room-id-input');
    const roomId = input.value.trim();

    if (!roomId) {
        alert('ルーム番号を入力してください');
        return;
    }

    // 数字のみを許可
    if (!/^\d+$/.test(roomId)) {
        alert('ルーム番号は数字のみで入力してください');
        return;
    }

    try {
        // ルームを作成または取得
        await createOrGetRoom(roomId);
        setCurrentRoom(roomId);

        // UIを更新
        document.getElementById('room-selector').style.display = 'none';
        document.getElementById('current-room-info').style.display = 'block';
        document.getElementById('current-room-number').textContent = roomId;

        // ルームのデータを監視
        watchRoom(roomId, (data) => {
            if (data && data.words) {
                wordDatabase['5'] = data.words['5'] || [];
                wordDatabase['7'] = data.words['7'] || [];
                displayAllWords();
            }
        });

        // 初期データを読み込み
        const roomData = await getRoomData(roomId);
        if (roomData && roomData.words) {
            wordDatabase['5'] = roomData.words['5'] || [];
            wordDatabase['7'] = roomData.words['7'] || [];
            displayAllWords();
        }

    } catch (error) {
        console.error('ルームへの参加に失敗しました:', error);
        alert('ルームへの参加に失敗しました。もう一度お試しください。');
    }
};

// ルームから退出
window.leaveRoom = function() {
    stopWatchingRoom();
    setCurrentRoom(null);

    // UIを更新
    document.getElementById('room-selector').style.display = 'block';
    document.getElementById('current-room-info').style.display = 'none';
    document.getElementById('room-id-input').value = '';

    // ローカルデータをクリア
    wordDatabase['5'] = [];
    wordDatabase['7'] = [];
    displayAllWords();
};

// デフォルトの言葉を追加
window.addDefaultWords = async function() {
    const roomId = getCurrentRoom();
    if (!roomId) {
        alert('先にルームに参加してください');
        return;
    }

    const defaults = getDefaultWords();
    const success = await addDefaultWordsToRoom(roomId, defaults);

    if (success) {
        // データはwatchRoomで自動的に更新される
    } else {
        alert('デフォルトの言葉の追加に失敗しました');
    }
};

// すべての言葉を削除
window.clearAllWords = async function() {
    const roomId = getCurrentRoom();
    if (!roomId) {
        alert('先にルームに参加してください');
        return;
    }

    if (!confirm('すべての言葉を削除しますか？')) {
        return;
    }

    const success = await clearAllWordsInRoom(roomId);

    if (!success) {
        alert('言葉の削除に失敗しました');
    }
};

// 言葉リストの表示/非表示を切り替え
window.toggleWordLists = function() {
    const words5 = document.getElementById('words-5');
    const words7 = document.getElementById('words-7');
    const toggleBtn = document.getElementById('toggle-btn');

    if (words5.classList.contains('hidden')) {
        words5.classList.remove('hidden');
        words7.classList.remove('hidden');
        toggleBtn.textContent = '言葉リストを隠す';
    } else {
        words5.classList.add('hidden');
        words7.classList.add('hidden');
        toggleBtn.textContent = '言葉リストを表示';
    }
};

// 使用済みの言葉をリセット
window.resetUsedWords = function() {
    usedWords['5'] = [];
    usedWords['7'] = [];
    displayAllWords();
};

// 文字数をカウント（字余り・字足らず許容）
function countCharacters(text) {
    return text.replace(/[、。!?・\s]/g, '').length;
}

// 言葉を追加
window.addWord = async function() {
    const roomId = getCurrentRoom();
    if (!roomId) {
        alert('先にルームに参加してください');
        return;
    }

    const input = document.getElementById('word-input');
    const typeSelect = document.getElementById('syllable-type');

    const word = input.value.trim();
    const type = typeSelect.value;

    if (!word) {
        return;
    }

    // 重複チェック
    if (wordDatabase[type].includes(word)) {
        alert('この言葉は既に登録されています');
        input.value = '';
        input.focus();
        return;
    }

    const success = await addWordToRoom(roomId, type, word);

    if (success) {
        // データはwatchRoomで自動的に更新される
        input.value = '';
        input.focus();
    } else {
        alert('言葉の追加に失敗しました');
    }
};

// 言葉を削除
window.deleteWord = async function(type, word) {
    const roomId = getCurrentRoom();
    if (!roomId) {
        alert('先にルームに参加してください');
        return;
    }

    const success = await removeWordFromRoom(roomId, type, word);

    if (!success) {
        alert('言葉の削除に失敗しました');
    }
};

// 特定のタイプの言葉を表示
function displayWords(type) {
    const listId = `words-${type}`;
    const listElement = document.getElementById(listId);

    listElement.innerHTML = '';

    wordDatabase[type].forEach(word => {
        const li = document.createElement('li');
        const charCount = countCharacters(word);
        const isUsed = usedWords[type].includes(word);

        li.className = isUsed ? 'used' : '';
        li.innerHTML = `
            <span class="word-text">
                <span class="word-content">${word}</span>
            </span>
            <span class="char-count">
                <span class="word-content">(${charCount}文字)</span>
            </span>
            <button class="delete-btn" onclick="deleteWord('${type}', '${word}')">×</button>
        `;
        listElement.appendChild(li);
    });

    // 件数表示
    const countSpan = document.createElement('div');
    countSpan.className = 'word-count';
    countSpan.textContent = `計 ${wordDatabase[type].length} 件`;
    listElement.appendChild(countSpan);
}

// すべての言葉を表示
function displayAllWords() {
    displayWords('5');
    displayWords('7');
}

// ランダムに言葉を選択（未使用のものから）
function getRandomWord(type) {
    const allWords = wordDatabase[type];
    const availableWords = allWords.filter(word => !usedWords[type].includes(word));

    // 未使用の言葉がない場合、使用済みをリセット
    if (availableWords.length === 0) {
        if (allWords.length === 0) {
            return '―';
        }
        usedWords[type] = [];
        return getRandomWord(type);
    }

    const selectedWord = availableWords[Math.floor(Math.random() * availableWords.length)];
    usedWords[type].push(selectedWord);

    return selectedWord;
}

// 俳句を生成
window.generateHaiku = function() {
    const roomId = getCurrentRoom();
    if (!roomId) {
        alert('先にルームに参加してください');
        return;
    }

    const line1 = getRandomWord('5');
    const line2 = getRandomWord('7');
    const line3 = getRandomWord('5');

    document.getElementById('line-1').textContent = line1;
    document.getElementById('line-2').textContent = line2;
    document.getElementById('line-3').textContent = line3;

    // 使用済みの言葉を表示するために、リストを更新
    displayAllWords();
};

// Enterキーで追加
document.addEventListener('DOMContentLoaded', () => {
    // ルーム番号入力でEnterキー
    document.getElementById('room-id-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            joinRoom();
        }
    });

    // 言葉入力でEnterキー
    document.getElementById('word-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addWord();
        }
    });
});
