// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZlFPiaWJio3m1wyU6kAeLHAdYzoCb1Do",
  authDomain: "expedia-bc494.firebaseapp.com",
  projectId: "expedia-bc494",
  storageBucket: "expedia-bc494.firebasestorage.app",
  messagingSenderId: "131001473046",
  appId: "1:131001473046:web:3d6514ae96d8a4f0817d37",
  measurementId: "G-PNJL652YH0"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

export default firebase_app