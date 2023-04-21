import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpP5OYlA7RuDQBaKckXjwBE8suEArI83k",
    authDomain: "svelte-chatapp-5d23f.firebaseapp.com",
    projectId: "svelte-chatapp-5d23f",
    storageBucket: "svelte-chatapp-5d23f.appspot.com",
    messagingSenderId: "42248852960",
    appId: "1:42248852960:web:50acabdb966a836d4f8785"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
