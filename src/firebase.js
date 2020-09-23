import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsU7h3HZ5k7b8fOPIxGuPkpQ9PTstCWIQ",
  authDomain: "whats-clone-ba472.firebaseapp.com",
  databaseURL: "https://whats-clone-ba472.firebaseio.com",
  projectId: "whats-clone-ba472",
  storageBucket: "whats-clone-ba472.appspot.com",
  messagingSenderId: "915401381360",
  appId: "1:915401381360:web:323e42335669780866b935",
  measurementId: "G-4LDY84DPRQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
