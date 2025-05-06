import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔹 Your Firebase Config (Get it from Firebase Console -> Project Settings)
const firebaseConfig = {
  apiKey: "AIzaSyBvzsRQwdMGNiLUo5hEpGlrxO_5vIFG_tk",
  authDomain: "paisa-controller-aea54.firebaseapp.com",
  projectId: "paisa-controller-aea54",
  storageBucket: "paisa-controller-aea54.firebasestorage.app",
  messagingSenderId: "740550032099",
  appId: "1:740550032099:web:dbcf53465a03b3831d23d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
