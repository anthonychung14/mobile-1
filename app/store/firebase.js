import { initializeApp } from "firebase";
import { addDataSuccess, removeItemSuccess, goOnline, goOffline } from '../actions/firebase';

const _config = {
	apiKey: "AIzaSyDMJte-Wd7gFXk2Awi9H4kJ4ah6BnI21Sw",
	authDomain: "minddb-ca25f.firebaseapp.com",
	databaseURL: "https://minddb-ca25f.firebaseio.com",
	projectId: "minddb-ca25f",
	storageBucket: "minddb-ca25f.appspot.com",
	messagingSenderId: "770914925629"
};

const firebaseApp = initializeApp(_config);

export const dataRef = firebaseApp.database().ref('data');
export const sessionRef = firebaseApp.database().ref('card-sessions');
const connectedRef = firebaseApp.database().ref('.info/connected');

export function syncFirebase(store) {
	dataRef.on('child_added', (snapshot) => {
		console.log('child added to store', snapshot);
		// ultimately this will probably do something else
		// or you can make firebase into a stream EYYYYY
		// store.dispatch(addDataSuccess(snapshot.val()))
	});

	dataRef.on('child_removed', (snapshot) => {
		store.dispatch(removeItemSuccess(snapshot.val().id))
	});

	connectedRef.on('value', snap => {
		console.log('connected ref value', snap);
		if (snap.val() === true) {
			store.dispatch(goOnline());

		} else {
			store.dispatch(goOffline())
		}
	});
}
