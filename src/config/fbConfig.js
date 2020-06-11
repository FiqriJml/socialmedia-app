  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

  // Your web app's Firebase configuration
  export var fbConfig = {
    apiKey: "AIzaSyBZEsUE7AA0DAPeouttfDD8a9e17rxzz2w",
    authDomain: "fsikologapp.firebaseapp.com",
    databaseURL: "https://fsikologapp.firebaseio.com",
    projectId: "fsikologapp",
    storageBucket: "fsikologapp.appspot.com",
    messagingSenderId: "819545491666",
    appId: "1:819545491666:web:4c85d4b69438103efe850b",
    measurementId: "G-3ELEH0VP2C"
  };
  // Initialize Firebase
  firebase.initializeApp(fbConfig);
  firebase.firestore();

  export default firebase;