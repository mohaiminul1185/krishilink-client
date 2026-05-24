import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5uA8d91msMcbeijNzFuAC9jX3RnyLgsQ",
  authDomain: "krishilink-d669d.firebaseapp.com",
  projectId: "krishilink-d669d",
  storageBucket: "krishilink-d669d.firebasestorage.app",
  messagingSenderId: "47033608079",
  appId: "1:47033608079:web:a29a3ef03ba42a6d770dfa"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);