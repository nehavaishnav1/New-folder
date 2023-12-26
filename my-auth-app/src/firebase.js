// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMvOY99P7BAWQ9JvHqnCo4LYed5j6lmMA",
  authDomain: "uber-264c3.firebaseapp.com",
  projectId: "uber-264c3",
  storageBucket: "uber-264c3.appspot.com",
  messagingSenderId: "718294789383",
  appId: "1:718294789383:web:b151ca0363e2b5829529a2",
  databaseURL:"https://uber-264c3-default-rtdb.firebaseio.com",
  measurementId: "G-2Q2E6HX7QK"
};
export const app=initializeApp(firebaseConfig);
