import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPRvUWK3vOnT8x1qXf0ulkSj1PJwFM754",
  authDomain: "clone-ec291.firebaseapp.com",
  projectId: "clone-ec291",
  storageBucket: "clone-ec291.appspot.com",
  messagingSenderId: "40328060498",
  appId: "1:40328060498:web:1d62627b08908fa11bc98b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const provider = new GoogleAuthProvider();
