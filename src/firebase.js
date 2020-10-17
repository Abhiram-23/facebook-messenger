import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBB2PDUIJB6JGf3htFLLRXfbbHbVltaUVc",
    authDomain: "facebook-messenger-clone-b2cee.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-b2cee.firebaseio.com",
    projectId: "facebook-messenger-clone-b2cee",
    storageBucket: "facebook-messenger-clone-b2cee.appspot.com",
    messagingSenderId: "560506763402",
    appId: "1:560506763402:web:6bc88685b6689cb2241573",
    measurementId: "G-HP9NQ6VLLG"
  });

  const db = firebase.firestore();

  export default db;