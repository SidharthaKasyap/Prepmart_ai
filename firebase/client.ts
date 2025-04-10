import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB1Boi320Yvl_LUwWMqoMmJP-E4usE_ku4",
  authDomain: "prepmart-54f4b.firebaseapp.com",
  projectId: "prepmart-54f4b",
  storageBucket: "prepmart-54f4b.firebasestorage.app",
  messagingSenderId: "185309611971",
  appId: "1:185309611971:web:0e215bbb043358bdff1f76",
  measurementId: "G-X08YVT2HLW"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
