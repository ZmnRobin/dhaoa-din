import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOkn9DH8SVPpu6ESdfG8-chcBqBE_ieOk",
  authDomain: "dhaoa-din.firebaseapp.com",
  projectId: "dhaoa-din",
  storageBucket: "dhaoa-din.firebasestorage.app",
  messagingSenderId: "1084878849174",
  appId: "1:1084878849174:web:2c054df50c5640e7a22eb7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 