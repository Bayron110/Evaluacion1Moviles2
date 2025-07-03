// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1OYIgIw5aO7RBC12h-QHKi3fiF_bm9yk",
    authDomain: "evaluacion1-7dce4.firebaseapp.com",
    projectId: "evaluacion1-7dce4",
    storageBucket: "evaluacion1-7dce4.firebasestorage.app",
    messagingSenderId: "51092318160",
    appId: "1:51092318160:web:8b19e526d6d2997bc67bd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)