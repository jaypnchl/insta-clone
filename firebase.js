// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAsXvfJlcM-4ZAdQKBPfbTZA9WxJyZlvDE',
  authDomain: 'insta-clone-ea646.firebaseapp.com',
  projectId: 'insta-clone-ea646',
  storageBucket: 'insta-clone-ea646.appspot.com',
  messagingSenderId: '829939206918',
  appId: '1:829939206918:web:a930c43fc1fdda40fd2c87',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
