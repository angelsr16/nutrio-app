import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDvQmDIgzFWyEaz-FUQOMyKt9eeLXC6p0",
  authDomain: "nutrio-app-pweb.firebaseapp.com",
  projectId: "nutrio-app-pweb",
  storageBucket: "nutrio-app-pweb.appspot.com",
  messagingSenderId: "245980206277",
  appId: "1:245980206277:web:306c72d95f34d68fae0cac",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.auth();

export default firebase;
