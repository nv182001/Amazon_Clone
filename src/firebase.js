import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoEsNrwufyPuU_NrUDlP--InkZTvccEYQ",
  authDomain: "clone1-baf93.firebaseapp.com",
  projectId: "clone1-baf93",
  storageBucket: "clone1-baf93.appspot.com",
  messagingSenderId: "814726926090",
  appId: "1:814726926090:web:af03439185c20e600934f3",
  measurementId: "G-HJM8VWBVPY"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { db, auth };