// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = 
{
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "challenge-app-bfa9b.firebaseapp.com",
    projectId: "challenge-app-bfa9b",
    storageBucket: "challenge-app-bfa9b.appspot.com",
    messagingSenderId: "264139456767",
    appId: "1:264139456767:web:d5fa9f355e9b2f65848cca"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)
export const provider = new GoogleAuthProvider()