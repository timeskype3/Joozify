import firebase from 'firebase';
import 'firebase/auth';
import config from './config';
import 'firebase/storage';

firebase.initializeApp(config);

const database = firebase.database();
const auth = firebase.auth;
const firestore = firebase.firestore();
const storage = firebase.storage();
const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export default { storage, database, auth, firestore, FacebookAuthProvider };
