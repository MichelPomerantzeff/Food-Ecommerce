// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "food-ecommerce-fc12b.firebaseapp.com",
  projectId: "food-ecommerce-fc12b",
  storageBucket: "food-ecommerce-fc12b.appspot.com",
  messagingSenderId: "831453046052",
  appId: "1:831453046052:web:50628952c5d8cae5d13fb1",
  measurementId: "G-Q9F9E1WGRW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
