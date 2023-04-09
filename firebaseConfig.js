// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeYs4vASXlubTddpscfztBzucxxkSOprQ",
    authDomain: "coffeewatch-eb706.firebaseapp.com",
    projectId: "coffeewatch-eb706",
    storageBucket: "coffeewatch-eb706.appspot.com",
    messagingSenderId: "415802845663",
    appId: "1:415802845663:web:9f39e32a6bf0b6ebed7c6a",
    measurementId: "G-GX9VMFCJ0B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)