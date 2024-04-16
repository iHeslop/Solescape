// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD03O17xB9hTag1PyXqjAi5JmRSWC_JIiQ",
  authDomain: "solescape-db.firebaseapp.com",
  projectId: "solescape-db",
  storageBucket: "solescape-db.appspot.com",
  messagingSenderId: "664304319907",
  appId: "1:664304319907:web:52372725fabd77d37eee16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
