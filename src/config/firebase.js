// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCFU41GTu18sAjhsQr3sFuaEOvu9aNdl6Q",
  authDomain: "superchat-6b252.firebaseapp.com",
  projectId: "superchat-6b252",
  storageBucket: "superchat-6b252.appspot.com",
  messagingSenderId: "935517424875",
  appId: "1:935517424875:web:88c4c922cabcf1067b02ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
