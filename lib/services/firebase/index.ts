// Import the functions you need from the SDKs you need
import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import firebase from 'firebase/compat/app';
// import {getFirestore} from "@firebase/firestore";

export const firebaseConfig = {
  apiKey: 'AIzaSyAI9-ENaFu6YhSvg28SnBcNAV7EizOs0MU',
  authDomain: 'online-tutoring-system-6051c.firebaseapp.com',
  projectId: 'online-tutoring-system-6051c',
  storageBucket: 'online-tutoring-system-6051c.appspot.com',
  messagingSenderId: '9520885545',
  appId: '1:9520885545:web:826e2cc7823b0dd2571138',
  measurementId: 'G-ECVQ3X88BX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const provider = new firebase.auth.GoogleAuthProvider();
