import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDze9SwGTVtu6Pf8FiHZ9RS1mWN9TWAfYQ",
  authDomain: "dond-9e0d9.firebaseapp.com",
  projectId: "dond-9e0d9",
  storageBucket: "dond-9e0d9.appspot.com",
  messagingSenderId: "436328625907",
  appId: "1:436328625907:web:9d7a100fca4002b74e6986",
  measurementId: "G-W0Q27957SF"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

/**
 * Converts a firestore article to JSON
 * @param {DocumentSnapshot} doc
 */
 export function articleToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestorm timestamp NOT serializable to data
    createdAt: data.createdAt.toMillis(),
  }
}


/**
 * Converts a firestore match to JSON
 * @param {DocumentSnapshot} doc
 */
 export function matchToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestorm timestamp NOT serializable to data
    matchdate: data.matchdate.toMillis(),
  }
}
