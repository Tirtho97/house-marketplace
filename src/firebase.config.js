// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2HfEKV_3e17lXhLAbAfN4rMg3CVkPZzI",
  authDomain: "house-marketplace-app-b272e.firebaseapp.com",
  projectId: "house-marketplace-app-b272e",
  storageBucket: "house-marketplace-app-b272e.appspot.com",
  messagingSenderId: "210879646578",
  appId: "1:210879646578:web:b3d2c8d3b8a1ddfa0bebeb",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
