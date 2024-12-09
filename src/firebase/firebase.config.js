// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-GgE_5CxJA_FqGXjOsxDNRb2IeUiEqGM",
  authDomain: "az-sports-corner.firebaseapp.com",
  projectId: "az-sports-corner",
  storageBucket: "az-sports-corner.firebasestorage.app",
  messagingSenderId: "296026581176",
  appId: "1:296026581176:web:d59d16a2f549a7efecac4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);