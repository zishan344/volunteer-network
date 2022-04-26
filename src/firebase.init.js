// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6yLSSA_t0jSm07hUbW5tGAmLcaFSKBgI",
  authDomain: "volunteer-project-e18a0.firebaseapp.com",
  projectId: "volunteer-project-e18a0",
  storageBucket: "volunteer-project-e18a0.appspot.com",
  messagingSenderId: "67420140504",
  appId: "1:67420140504:web:5ab1080ab1782a3a0738ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
