// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore , Timestamp} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7Y_Au2sWWqH4mTHQD2jUUstgSBv0GWEs",
  authDomain: "engshots.firebaseapp.com",
  projectId: "engshots",
  storageBucket: "engshots.appspot.com",
  messagingSenderId: "820701706470",
  appId: "1:820701706470:web:7dc5b0b3c78c2fa5056327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const timestamp = Timestamp;