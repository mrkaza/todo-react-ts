import 'firebase/firestore';
import 'firebase/auth';

import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyByQuqLmTsUJVPeWVjEdWLJcmCMwVPxKys',
  authDomain: 'todo-prototyp-js.firebaseapp.com',
  databaseURL: 'https://todo-prototyp-js.firebaseio.com',
  projectId: 'todo-prototyp-js',
  storageBucket: 'todo-prototyp-js.appspot.com',
  messagingSenderId: '643003124357',
  appId: '1:643003124357:web:74cc81190767c9a91037ec',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().enablePersistence();

export const firestore = firebase.firestore();
export const firebaseAuth = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();

firebaseAuth.useEmulator('http://localhost:9099/');
if (location.hostname === 'localhost') {
  firestore.useEmulator('localhost', 8080);
}
firebase.functions().useEmulator('localhost', 5001);
