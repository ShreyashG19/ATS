// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNXto2MVWiEFPnPlEhMBRf48YsnYiVbWk",
    authDomain: "ats-system-67088.firebaseapp.com",
    projectId: "ats-system-67088",
    storageBucket: "ats-system-67088.appspot.com",
    messagingSenderId: "509288531498",
    appId: "1:509288531498:web:8eabffe4281d422ffa2553",
    measurementId: "G-W8NSBRPPL2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

//frontend code
const loginForm = document.getElementById("#login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email-field").value;
    const password = document.getElementById("password-field").value;
    const loginRadio = document.getElementById("login");
    if (loginRadio.checked) handleSignIn(email, password);
    else handleSignUp(email, password);
});
const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log("logged in : \n", user);
        })
        .catch((error) => {
            console.log("index.js service :: handleSignIn :: error : ", error);
        });
};

const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log("signed up : \n", user);
        })
        .catch((error) => {
            console.log("index.js service :: handleSignUp :: error : ", error);
        });
};
