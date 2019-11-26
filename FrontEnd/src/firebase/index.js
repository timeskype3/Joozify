import firebase from 'firebase';
import 'firebase/auth';
import config from './config';

firebase.initializeApp(config);

const database = firebase.database();
const auth = firebase.auth;
const firestore = firebase.firestore();
const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export default { database, auth, firestore, FacebookAuthProvider };
