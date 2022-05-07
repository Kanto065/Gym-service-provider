// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGk2Y8D5N8JrxxC2J_sRAqV8xxE-ukcVc",
    authDomain: "muscle-rehab-with-john.firebaseapp.com",
    projectId: "muscle-rehab-with-john",
    storageBucket: "muscle-rehab-with-john.appspot.com",
    messagingSenderId: "623322053572",
    appId: "1:623322053572:web:4cbd77930c619dc4150291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;