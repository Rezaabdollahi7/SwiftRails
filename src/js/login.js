// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
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
const auth = getAuth(app)

const submit = document.getElementById('submit');

submit.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Loggin in ... ")
            window.location.href = '../views/index.html'

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)

        });
})