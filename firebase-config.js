// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD_hYmiYzuz_Ey05Dd0FJsAN0uvc3dCYI",
  authDomain: "random-haiku.firebaseapp.com",
  projectId: "random-haiku",
  storageBucket: "random-haiku.firebasestorage.app",
  messagingSenderId: "756353135184",
  appId: "1:756353135184:web:92f32d62026841a8c71755",
  measurementId: "G-8DM8TW6873"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
