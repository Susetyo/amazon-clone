import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAaXzsus1Epao9mIdC5K_jbo67BeBf2r6s",
    authDomain: "challange-8d56e.firebaseapp.com",
    databaseURL: "https://challange-8d56e.firebaseio.com",
    projectId: "challange-8d56e",
    storageBucket: "challange-8d56e.appspot.com",
    messagingSenderId: "984881521051",
    appId: "1:984881521051:web:f6d9c95291457c765ec13e",
    measurementId: "G-PM4ZLJKC5H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
