// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const submit = document.getElementById('submit');
const google_login = document.getElementById('google-login-btn')

submit.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Creating user")
            console.log(user);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)

        });
})

google_login.addEventListener("click", function (event) {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            window.location.href = '../views/index.html'
            
// ...
        }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.

            // const email = error.customData.email;

            // The AuthCredential type that was used.

            // const credential = GoogleAuthProvider.credentialFromError(error);
     
        });
})