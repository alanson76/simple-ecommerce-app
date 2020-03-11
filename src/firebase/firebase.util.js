import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCZTGk_ayKdN8l2EB8B7oHuEafwepLWZ-o",
  authDomain: "simple-ecommerce-app.firebaseapp.com",
  databaseURL: "https://simple-ecommerce-app.firebaseio.com",
  projectId: "simple-ecommerce-app",
  storageBucket: "simple-ecommerce-app.appspot.com",
  messagingSenderId: "1039353013324",
  appId: "1:1039353013324:web:e3adb414bddeec5a9780e9",
  measurementId: "G-C9YFNNHHWE"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;