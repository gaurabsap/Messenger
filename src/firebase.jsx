// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "a",
  authDomain: "b",
  projectId: "c",
  storageBucket: "x",
  messagingSenderId: "n",
  appId: "xx"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export default app;
