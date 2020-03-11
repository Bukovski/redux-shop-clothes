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


export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get(); // get auth data from db
	
	if (!snapShot.exists) { // new user only
		const { displayName, email } = userAuth;
		const createdAt = new Date(); // set current date
		
		try {
			await userRef.set({ // overwrites data in db
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	
	return userRef; // data about old user from db
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	
	const batch = firestore.batch();
	
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		
		batch.set(newDocRef, obj)
	});
	
	return await batch.commit();
};

export const auth = firebase.auth(); // auth
export const firestore = firebase.firestore(); // cloud Firestore (get data about each db)

const provider = new firebase.auth.GoogleAuthProvider(); // log in through google account
provider.setCustomParameters({ prompt: 'select_account' }); // google authentication request


export const signInWithGoogle = () => auth.signInWithPopup(provider); // shop modal popup with google form authentication


export default firebase;
