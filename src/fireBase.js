import firebase from 'firebase';

const firebaseApp = firebase.intializeApp({
  apiKey: "AIzaSyCAa6Vg9RbJmzugrEIJ4UxpRe5O65O9oH0",
  authDomain: "react-photo-app-honeyai.firebaseapp.com",
  databaseURL: "https://react-photo-app-honeyai.firebaseio.com",
  projectId: "react-photo-app-honeyai",
  storageBucket: "react-photo-app-honeyai.appspot.com",
  messagingSenderId: "1033170192283",
  appId: "1:1033170192283:web:15b25e11ced02344d8433e",
  measurementId: "G-3LKHQP4EYV"
})

const database = firebaseApp.firestore();
// allows for users to login and log out
const auth = firebase.auth();
//uploading files
const storage = firebase.storage();

export {database,auth,storage}