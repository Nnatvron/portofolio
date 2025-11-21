// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiQrvq5J1nQrd261t0VHJ1M-XaAyp-oaU",
  authDomain: "my-portofolio-537.firebaseapp.com",
  projectId: "my-portofolio-537",
  storageBucket: "my-portofolio-537.firebasestorage.app",
  messagingSenderId: "513402030840",
  appId: "1:513402030840:web:730b17a234275a969a090d",
  measurementId: "G-EN9EX9TZPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
