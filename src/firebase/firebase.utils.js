import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAYCrtXNtPZY31PT0R5rgCp5OLeE2IVDtM",
  authDomain: "crown-clothing-db-a32c6.firebaseapp.com",
  projectId: "crown-clothing-db-a32c6",
  storageBucket: "crown-clothing-db-a32c6.appspot.com",
  messagingSenderId: "740725495355",
  appId: "1:740725495355:web:c1bffc459e65c7a2342e1e",
  measurementId: "G-LYF05B56TJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
