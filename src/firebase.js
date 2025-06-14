// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDODQp8Zg32Ex7GHcfEyqQ-sOoO9sesD_E",
  authDomain: "personaaeye.firebaseapp.com",
  projectId: "personaaeye",
  storageBucket: "personaaeye.firebasestorage.app",
  messagingSenderId: "588630953883",
  appId: "1:588630953883:web:bc42d861cfb7322ec59b3e",
  measurementId: "G-GHX0GVWSE0"
};

// Initialize Firebase
const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };