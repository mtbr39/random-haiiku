import { db } from './firebase-config.js';
import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  onSnapshot,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore';

let currentRoomId = null;
let unsubscribe = null;

// ルームIDを設定
export function setCurrentRoom(roomId) {
  currentRoomId = roomId;
}

// ルームIDを取得
export function getCurrentRoom() {
  return currentRoomId;
}

// ルームを作成または取得
export async function createOrGetRoom(roomId) {
  const roomRef = doc(db, 'rooms', roomId);
  const roomSnap = await getDoc(roomRef);

  if (!roomSnap.exists()) {
    // ルームが存在しない場合は作成
    await setDoc(roomRef, {
      words: {
        '5': [],
        '7': []
      },
      createdAt: new Date(),
      lastUpdated: new Date()
    });
  }

  return roomRef;
}

// ルームのデータを取得
export async function getRoomData(roomId) {
  const roomRef = doc(db, 'rooms', roomId);
  const roomSnap = await getDoc(roomRef);

  if (roomSnap.exists()) {
    return roomSnap.data();
  }
  return null;
}

// 言葉を追加
export async function addWordToRoom(roomId, type, word) {
  const roomRef = doc(db, 'rooms', roomId);

  try {
    await updateDoc(roomRef, {
      [`words.${type}`]: arrayUnion(word),
      lastUpdated: new Date()
    });
    return true;
  } catch (error) {
    console.error('言葉の追加に失敗しました:', error);
    return false;
  }
}

// 言葉を削除
export async function removeWordFromRoom(roomId, type, word) {
  const roomRef = doc(db, 'rooms', roomId);

  try {
    await updateDoc(roomRef, {
      [`words.${type}`]: arrayRemove(word),
      lastUpdated: new Date()
    });
    return true;
  } catch (error) {
    console.error('言葉の削除に失敗しました:', error);
    return false;
  }
}

// ルームの変更をリアルタイムで監視
export function watchRoom(roomId, callback) {
  // 既存の監視を解除
  if (unsubscribe) {
    unsubscribe();
  }

  const roomRef = doc(db, 'rooms', roomId);

  unsubscribe = onSnapshot(roomRef, (doc) => {
    if (doc.exists()) {
      callback(doc.data());
    }
  }, (error) => {
    console.error('ルームの監視エラー:', error);
  });

  return unsubscribe;
}

// 監視を停止
export function stopWatchingRoom() {
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null;
  }
}

// すべての言葉を削除
export async function clearAllWordsInRoom(roomId) {
  const roomRef = doc(db, 'rooms', roomId);

  try {
    await updateDoc(roomRef, {
      'words.5': [],
      'words.7': [],
      lastUpdated: new Date()
    });
    return true;
  } catch (error) {
    console.error('言葉のクリアに失敗しました:', error);
    return false;
  }
}

// デフォルトの言葉をルームに追加
export async function addDefaultWordsToRoom(roomId, defaultWords) {
  const roomRef = doc(db, 'rooms', roomId);
  const roomData = await getRoomData(roomId);

  if (!roomData) {
    return false;
  }

  // 重複を避けて追加
  const newWords5 = [...new Set([...roomData.words['5'], ...defaultWords['5']])];
  const newWords7 = [...new Set([...roomData.words['7'], ...defaultWords['7']])];

  try {
    await updateDoc(roomRef, {
      'words.5': newWords5,
      'words.7': newWords7,
      lastUpdated: new Date()
    });
    return true;
  } catch (error) {
    console.error('デフォルト言葉の追加に失敗しました:', error);
    return false;
  }
}
