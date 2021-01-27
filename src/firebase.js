// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBgNaFkRcmr8oaQnbiirTlN6ZlfDDnlAkA",
    authDomain: "clone-25078.firebaseapp.com",
    projectId: "clone-25078",
    storageBucket: "clone-25078.appspot.com",
    messagingSenderId: "1027684182279",
    appId: "1:1027684182279:web:e8ffe7909484b65eaf3da2",
    measurementId: "G-YWBF2CYRM1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };