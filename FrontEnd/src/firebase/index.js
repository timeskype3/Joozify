// import firebase from 'firebase/app'
import firebase from 'firebase';
import 'firebase/auth';
import config from './config';

// if (!firebase.apps.length) {
//   firebase.initializeApp(config)
// }

firebase.initializeApp(config);

// export default firebase.auth()
// export firebase.database()

const database = firebase.database();
const auth = firebase.auth();
const firestore = firebase.firestore();

export default { database, auth, firestore };
