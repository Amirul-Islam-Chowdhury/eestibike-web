// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7YnyO6J_61FVsH-YrV5l1OboFvU-KZ-o",
  authDomain: "eestibikes.firebaseapp.com",
  projectId: "eestibikes",
  storageBucket: "eestibikes.appspot.com",
  messagingSenderId: "96060936505",
  appId: "1:96060936505:web:838b7914e9f49328a9d8e8",
  measurementId: "G-GTN64HTBYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firedb=getFirestore(app)
 
export default firedb;