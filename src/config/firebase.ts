// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk99FdqCfCXPScriciXExFmkDzLyj7GI4",
  authDomain: "pixel-app-4b547.firebaseapp.com",
  projectId: "pixel-app-4b547",
  storageBucket: "pixel-app-4b547.firebasestorage.app",
  messagingSenderId: "277718459422",
  appId: "1:277718459422:web:6799f9c8142d5f651a7a0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);