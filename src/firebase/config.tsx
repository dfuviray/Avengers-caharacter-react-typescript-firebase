import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB84Xc73y1gATYNAkqyIahwc0g7S9Jkcis",
    authDomain: "avengers-cc15e.firebaseapp.com",
    databaseURL: "https://avengers-cc15e.firebaseio.com",
    projectId: "avengers-cc15e",
    storageBucket: "avengers-cc15e.appspot.com",
    messagingSenderId: "524697673820",
    appId: "1:524697673820:web:3ff0e5fa1f766ec61bc699"
  };

  firebase.initializeApp(config);

  export default firebase