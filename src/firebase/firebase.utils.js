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

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();
		
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
	});
	
	// get categories product from key lowercase title
	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[ collection.title.toLowerCase() ] = collection;
		
		return accumulator;
	}, {})
};

// check user login or not
export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			
			resolve(userAuth);
		}, reject)
	})
};

export const auth = firebase.auth(); // auth
export const firestore = firebase.firestore(); // cloud Firestore (get data about each db)

export const googleProvider = new firebase.auth.GoogleAuthProvider(); // log in through google account
googleProvider.setCustomParameters({ prompt: 'select_account' }); // google authentication request


export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); // shop modal popup with google form authentication


export default firebase;
