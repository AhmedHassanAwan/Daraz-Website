


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeQL_gpTAVDQpVEmrp1pcJy5d7m5y02I0",
  authDomain: "daraz-website-4abdd.firebaseapp.com",
  projectId: "daraz-website-4abdd",
  storageBucket: "daraz-website-4abdd.firebasestorage.app",
  messagingSenderId: "74953648082",
  appId: "1:74953648082:web:8ad15c640437f0cfa4ca0b",
  measurementId: "G-C1V0G4F4FV"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);