import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW0gE_u9mZocvBNm_9_BDlvtLJrImbwLo",
  authDomain: "memoriesguard-6bacd.firebaseapp.com",
  projectId: "memoriesguard-6bacd",
  storageBucket: "memoriesguard-6bacd.appspot.com",
  messagingSenderId: "30459196798",
  appId: "1:30459196798:web:0246eadc639635dad2ef2f",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
