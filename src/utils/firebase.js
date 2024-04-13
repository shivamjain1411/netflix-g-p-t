// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5nND-SPSe2G32jBkLMpX1RkYfkVykKm0",
  authDomain: "netflixgpt-717c9.firebaseapp.com",
  projectId: "netflixgpt-717c9",
  storageBucket: "netflixgpt-717c9.appspot.com",
  messagingSenderId: "1027734160638",
  appId: "1:1027734160638:web:b9980667801afa9e9fd1af",
  measurementId: "G-DJ237ZYTGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth();