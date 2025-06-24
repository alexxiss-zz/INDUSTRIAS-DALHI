import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvNgH8h4s1M7K5cjfBwDvV0Uq8wWxEysw",
  authDomain: "dalhi-a6788.firebaseapp.com",
  projectId: "dalhi-a6788",
  storageBucket: "dalhi-a6788.firebasestorage.app",
  messagingSenderId: "243953913894",
  appId: "1:243953913894:web:cd7ea45c3c0a82ca4f96e7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };