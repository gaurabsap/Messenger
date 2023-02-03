// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAA1y5cLWyC_2I2QOFMsXPXXoIHhwgu8ds",
  authDomain: "pr-firebase-8d1d0.firebaseapp.com",
  projectId: "pr-firebase-8d1d0",
  storageBucket: "pr-firebase-8d1d0.appspot.com",
  messagingSenderId: "145873698495",
  appId: "1:145873698495:web:876bb99cc001525035d00a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export default app;