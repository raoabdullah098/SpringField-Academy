// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc, query, where, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// YOUR FIREBASE CONFIG - Copy exactly from your code
const firebaseConfig = {
    apiKey: "AIzaSyA655n0Mn02y-nQfNukAq4HqycBhHXjJ4o",
    authDomain: "school-management-system-f323f.firebaseapp.com",
    projectId: "school-management-system-f323f",
    storageBucket: "school-management-system-f323f.firebasestorage.app",
    messagingSenderId: "329366129965",
    appId: "1:329366129965:web:c06308ce3f4e27daefd7a4",
    measurementId: "G-6SX5C9BPZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export everything
export { auth, db, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc, query, where, setDoc };