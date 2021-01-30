import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyB2avy7Q9WlcTxmFiLBKcIPjmRuW-EqV1s",
  authDomain: "signal-clone-8f8e5.firebaseapp.com",
  projectId: "signal-clone-8f8e5",
  storageBucket: "signal-clone-8f8e5.appspot.com",
  messagingSenderId: "178496229393",
  appId: "1:178496229393:web:af339c0d32aa475a7ee1b0",
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
