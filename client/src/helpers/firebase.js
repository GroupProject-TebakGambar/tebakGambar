// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy55DNiLWtcwLAPuiB2qE9LAcbJP_OFV0",
  authDomain: "tebakgambar-66ba1.firebaseapp.com",
  projectId: "tebakgambar-66ba1",
  storageBucket: "tebakgambar-66ba1.appspot.com",
  messagingSenderId: "68837075673",
  appId: "1:68837075673:web:62f90851fea82136942cc8",
  measurementId: "G-8B5EM10S3E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

