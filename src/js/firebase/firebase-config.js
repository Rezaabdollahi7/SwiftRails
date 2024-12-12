// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTgDxeRs0U-QR7Gj2rAS5m0leXQi9D0aU",
    authDomain: "swiftrails-54e19.firebaseapp.com",
    projectId: "swiftrails-54e19",
    storageBucket: "swiftrails-54e19.firebasestorage.app",
    messagingSenderId: "1023346310863",
    appId: "1:1023346310863:web:d485760b7eadfe49f8c1ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
