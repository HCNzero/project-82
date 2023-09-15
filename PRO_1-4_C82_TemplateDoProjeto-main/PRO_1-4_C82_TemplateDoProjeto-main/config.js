import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDF5cQAdr0GL5fc45cg-rAuO8UXYMMIVqk",
  authDomain: "ciclista-eletronico-259d8.firebaseapp.com",
  projectId: "ciclista-eletronico-259d8",
  storageBucket: "ciclista-eletronico-259d8.appspot.com",
  messagingSenderId: "296801011678",
  appId: "1:296801011678:web:c91961783dc4a39a75ff4f"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
