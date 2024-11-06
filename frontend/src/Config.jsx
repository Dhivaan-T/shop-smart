// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxpyrw2soWa88qSaad7IqibRyVZrO-ZqY",
  authDomain: "ecommerce-adf0b.firebaseapp.com",
  projectId: "ecommerce-adf0b",
  storageBucket: "ecommerce-adf0b.appspot.com",
  messagingSenderId: "831967871267",
  appId: "1:831967871267:web:ece7dd7f2ceedd14be0c96",
  measurementId: "G-X8VV1LS5MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};