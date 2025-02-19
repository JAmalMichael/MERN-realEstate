// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-54d61.firebaseapp.com",
  projectId: "mern-estate-54d61",
  storageBucket: "mern-estate-54d61.appspot.com",
  messagingSenderId: "735575950553",
  appId: "1:735575950553:web:c9fbef46bd39c1531a2ac8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);