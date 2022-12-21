// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-y9YPoNOU9L-IgkGk_55AC-HydWbRgic",
  authDomain: "react-curso-64134.firebaseapp.com",
  projectId: "react-curso-64134",
  storageBucket: "react-curso-64134.appspot.com",
  messagingSenderId: "590879229368",
  appId: "1:590879229368:web:14b0029ce31bbaa5f37b4d",
  measurementId: "G-27DDL9RXPX",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
//const analytics = getAnalytics(app);
