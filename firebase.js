import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCf4-7PR9MoZiOsW2iYtwmiq4xrqYySclg",
  authDomain: "signal-react-native-be56d.firebaseapp.com",
  projectId: "signal-react-native-be56d",
  storageBucket: "signal-react-native-be56d.appspot.com",
  messagingSenderId: "889988646357",
  appId: "1:889988646357:web:e072329e67c5441e54e95c",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
