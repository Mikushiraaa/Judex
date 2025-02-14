// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvIi7-yVaa8jsdTdFxkfsRgx7yQw3JpwQ",
    authDomain: "disciplinarycommitteeproject.firebaseapp.com",
    projectId: "disciplinarycommitteeproject",
    storageBucket: "disciplinarycommitteeproject.firebasestorage.app",
    messagingSenderId: "1090566974435",
    appId: "1:1090566974435:web:233958b1a074da323cced6",
    measurementId: "G-87V72QSTS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign Up
document.getElementById('signup-btn').addEventListener('click', async () => {
    const email = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const role = document.getElementById('role').value;

    // Check if all fields are filled
    if (!email || !password || !confirmPassword || !firstName || !lastName || !role) {
        alert('Please fill out all fields.');
        return;
    }

    // Paghindi match ang password at confirm password
    if (password !== confirmPassword) {
        event.preventDefault();
        alert('Passwords do not match!');
    }
    
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        // Add user details to Firestore
        await setDoc(doc(db, "users", user.uid), {
            firstName,
            lastName,
            role,
            email
        });
    
        // Automatically sign in the user after successful sign up
        await signInWithEmailAndPassword(auth, email, password);
        
        // Redirect to HelloWorld.html with success message
        window.location.href = '../Dashboard/HelloWorld.html?message=User signed up successfully!';
    } catch (error) {
        console.error('Error signing up:', error);
        if (error.code === 'auth/email-already-in-use') {
            alert('This email is already in use. Please use a different email.');
        } else {
            alert('Error signing up: ' + error.message);
        }
    }
});

// Sign In
document.getElementById('login-btn').addEventListener('click', async () => {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        alert('User signed in successfully!');
        window.location.href = '../Dashboard/HelloWorld.html';
    } catch (error) {
        console.error('Error signing in:', error);
        alert('Error signing in: ' + error.message);
    }
});