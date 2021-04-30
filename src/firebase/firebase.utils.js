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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;