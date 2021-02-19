import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUv0UuFmXxucKNI0IyTtXXriDPyNQ1slg",
  authDomain: "linkdin-clone-75279.firebaseapp.com",
  projectId: "linkdin-clone-75279",
  storageBucket: "linkdin-clone-75279.appspot.com",
  messagingSenderId: "369219829224",
  appId: "1:369219829224:web:8ce753c0216774e7fff85d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
