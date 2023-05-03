// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js'
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https:/www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyAHoSdn6r38ii5ZFewMjFPwjuRZkFfPX9s",
  authDomain: "hanovershop-df086.firebaseapp.com",
  projectId: "hanovershop-df086",
  storageBucket: "hanovershop-df086.appspot.com",
  messagingSenderId: "276833523153",
  appId: "1:276833523153:web:b53d427441c88c7573bcf0",
  measurementId: "G-CJV4Z2LXTM"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export const authModule = { auth, provider, signInWithPopup, onAuthStateChanged }