// firebase/config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_q81RRezgEQcHLeXNjSrR0fcmwPuD1w8",
  authDomain: "safeele-2dcc7.firebaseapp.com",
  projectId: "safeele-2dcc7",
  storageBucket: "safeele-2dcc7.firebasestorage.app",
  messagingSenderId: "121213902283",
  appId: "1:121213902283:web:8624bf8741aad33ae3aa4e",
  measurementId: "G-1CN2QQW6XL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
