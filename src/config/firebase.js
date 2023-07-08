import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

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
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
