// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOzdyCERLMytRJXjWBydYdA9iw98zzxRs",
  authDomain: "portafolioreact-afeaf.firebaseapp.com",
  projectId: "portafolioreact-afeaf",
  storageBucket: "portafolioreact-afeaf.appspot.com",
  messagingSenderId: "438410477495",
  appId: "1:438410477495:web:ade89ff748df654156b232",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
/* npm install -g firebase-tools 
firebase login 
firebase init
*/
