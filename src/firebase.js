// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBArqorE11OkXa0hFHt_nIDECYRBumPQ5c',
  authDomain: 'elitmus-407bb.firebaseapp.com',
  projectId: 'elitmus-407bb',
  storageBucket: 'elitmus-407bb.appspot.com',
  messagingSenderId: '730051051108',
  appId: '1:730051051108:web:14750e0106216ca43b6971',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
