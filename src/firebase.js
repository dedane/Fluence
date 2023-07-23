// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7OnQIaHmyVy515ZR8AhbLzbYPzr1ch4w",
    authDomain: "afrifluence-64cd4.firebaseapp.com",
    projectId: "afrifluence-64cd4",
    storageBucket: "afrifluence-64cd4.appspot.com",
    messagingSenderId: "706807441518",
    appId: "1:706807441518:web:f0ba471c2ccebdc337de7f",
    measurementId: "G-P9C785RJ3Y"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
