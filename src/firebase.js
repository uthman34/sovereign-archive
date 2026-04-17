// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB9BU0EIPNEfQFqvW2K4eAd2tQRdy4-V1U",
    authDomain: "sovereign-acrhive.firebaseapp.com",
    projectId: "sovereign-acrhive",
    storageBucket: "sovereign-acrhive.firebasestorage.app",
    messagingSenderId: "333570239111",
    appId: "1:333570239111:web:94bb6fe1925948f2352622",
    measurementId: "G-1W9H4G2ZGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();