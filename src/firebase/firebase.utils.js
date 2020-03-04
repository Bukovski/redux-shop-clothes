import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


let config = {};

try {
	config = JSON.parse(process.env.REACT_APP_FIREBASE_SETTING);
} catch (error) {
	console.error("Firebase key not available");
}

firebase.initializeApp(config); // connect to db

export const auth = firebase.auth(); // auth
export const firestore = firebase.firestore(); // cloud Firestore (get data about each db)

const provider = new firebase.auth.GoogleAuthProvider(); // log in through google account
provider.setCustomParameters({ prompt: 'select_account' }); // google authentication request


export const signInWithGoogle = () => auth.signInWithPopup(provider); // shop modal popup with google form authentication


export default firebase;
