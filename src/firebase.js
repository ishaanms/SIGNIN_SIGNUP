// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFd0EnQstFZrZinkZNwwTgx-rluC5LJkA",
  authDomain: "react-authentication-a07ba.firebaseapp.com",
  projectId: "react-authentication-a07ba",
  storageBucket: "react-authentication-a07ba.appspot.com",
  messagingSenderId: "449500388172",
  appId: "1:449500388172:web:1754e3a76047db2ca74de9",
  measurementId: "G-WHYCRQ6WRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;