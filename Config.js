




import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCHNSJvJi4V8VnisJjkhjMMBvFQpECzZTs",
  authDomain: "flipkart-website-43042.firebaseapp.com",
  projectId: "flipkart-website-43042",
  storageBucket: "flipkart-website-43042.firebasestorage.app",
  messagingSenderId: "545196305211",
  appId: "1:545196305211:web:1b87d45be282b88e0f251e",
  measurementId: "G-0BV98ZBPSG"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);