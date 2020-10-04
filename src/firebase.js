import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCg22Gt-MdkVD0oy08K4vgz43QWSMtA6ks",
        authDomain: "facebook-messenger-clone-4498d.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-4498d.firebaseio.com",
        projectId: "facebook-messenger-clone-4498d",
        storageBucket: "facebook-messenger-clone-4498d.appspot.com",
        messagingSenderId: "646138983685",
        appId: "1:646138983685:web:0920304591f0ba5e27f36c",
        measurementId: "G-0WPW5TRJK4"
});

const db = firebaseApp.firestore();

export default db