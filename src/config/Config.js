import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBCqjGHQDx8C7mJJ-nT58PJqSOtTMGNR8U",
    authDomain: "fer-ecommerce.firebaseapp.com",
    projectId: "fer-ecommerce",
    storageBucket: "fer-ecommerce.firebasestorage.app",
    messagingSenderId: "658469045212",
    appId: "1:658469045212:web:a0ccd73fcae2c22b6f0519",
    measurementId: "G-XEL6NQSK35"
};

const firebase = initializeApp(firebaseConfig);


const auth = getAuth(firebase);
const db = getFirestore(firebase);
// const storage = firebase.storage();

export { auth, db };