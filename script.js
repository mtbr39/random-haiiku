// 言葉を保存するデータ構造
const wordDatabase = {
    '5': [],  // 5文字
    '7': []   // 7文字
};

// 使用済みの言葉を記録
const usedWords = {
    '5': [],
    '7': []
};

// LocalStorageから言葉を読み込む
function loadWords() {
    const saved = localStorage.getItem('haikuWords');
    if (saved) {
        const loaded = JSON.parse(saved);
        // 旧データとの互換性を保つ
        if (loaded['5-1'] || loaded['5-2']) {
            wordDatabase['5'] = [...(loaded['5-1'] || []), ...(loaded['5-2'] || []), ...(loaded['5'] || [])];
        } else {
            wordDatabase['5'] = loaded['5'] || [];
        }
        wordDatabase['7'] = loaded['7'] || [];
    }
    displayAllWords();
}

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

// デフォルトの言葉を追加
function addDefaultWords() {
    const defaults = getDefaultWords();

    // 重複を避けて追加
    defaults['5'].forEach(word => {
        if (!wordDatabase['5'].includes(word)) {
            wordDatabase['5'].push(word);
        }
    });

    defaults['7'].forEach(word => {
        if (!wordDatabase['7'].includes(word)) {
            wordDatabase['7'].push(word);
        }
    });

    saveWords();
    displayAllWords();
}

// すべての言葉を削除
function clearAllWords() {
    if (!confirm('すべての言葉を削除しますか？')) {
        return;
    }

    wordDatabase['5'] = [];
    wordDatabase['7'] = [];

    saveWords();
    displayAllWords();
}

// 言葉リストの表示/非表示を切り替え
function toggleWordLists() {
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
}

// 使用済みの言葉をリセット
function resetUsedWords() {
    usedWords['5'] = [];
    usedWords['7'] = [];
    displayAllWords();
}

// LocalStorageに言葉を保存
function saveWords() {
    localStorage.setItem('haikuWords', JSON.stringify(wordDatabase));
}

// 文字数をカウント（字余り・字足らず許容）
function countCharacters(text) {
    // 句読点や記号は文字数に含めない
    return text.replace(/[、。！？・\s]/g, '').length;
}

// 言葉を追加
function addWord() {
    const input = document.getElementById('word-input');
    const typeSelect = document.getElementById('syllable-type');

    const word = input.value.trim();
    const type = typeSelect.value;

    if (!word) {
        return;
    }

    // 重複チェック
    if (wordDatabase[type].includes(word)) {
        return;
    }

    wordDatabase[type].push(word);
    saveWords();
    displayWords(type);

    // 入力欄をクリア
    input.value = '';
    input.focus();
}

// 言葉を削除
function deleteWord(type, word) {
    const index = wordDatabase[type].indexOf(word);
    if (index > -1) {
        wordDatabase[type].splice(index, 1);
        saveWords();
        displayWords(type);
    }
}

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
function generateHaiku() {
    const line1 = getRandomWord('5');
    const line2 = getRandomWord('7');
    const line3 = getRandomWord('5');

    document.getElementById('line-1').textContent = line1;
    document.getElementById('line-2').textContent = line2;
    document.getElementById('line-3').textContent = line3;

    // 使用済みの言葉を表示するために、リストを更新
    displayAllWords();
}

// Enterキーで追加
document.addEventListener('DOMContentLoaded', () => {
    loadWords();

    document.getElementById('word-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addWord();
        }
    });
});
