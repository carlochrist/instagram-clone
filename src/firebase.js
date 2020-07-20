import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAvKrzdLK1xYHSu0sTEthW574u-cIc72T8",
  authDomain: "instagram-clone-9b05a.firebaseapp.com",
  databaseURL: "https://instagram-clone-9b05a.firebaseio.com",
  projectId: "instagram-clone-9b05a",
  storageBucket: "instagram-clone-9b05a.appspot.com",
  messagingSenderId: "952014940047",
  appId: "1:952014940047:web:1bc5fcf15241ac092acdfa",
  measurementId: "G-HE39FH31BC",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
