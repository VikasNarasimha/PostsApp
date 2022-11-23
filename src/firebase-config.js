// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc30q_d40jrsCm1bB7q91_Y_VQv3um8oA",
  authDomain: "blogproject-9e7f5.firebaseapp.com",
  projectId: "blogproject-9e7f5",
  storageBucket: "blogproject-9e7f5.appspot.com",
  messagingSenderId: "797070104602",
  appId: "1:797070104602:web:40c33de2084cc23e6059a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth= getAuth(app)
export const provider = new GoogleAuthProvider()
