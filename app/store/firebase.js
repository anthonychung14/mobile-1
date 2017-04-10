import { initializeApp } from "firebase";
import { addItemSuccess, removeItemSuccess, goOnline, goOffline } from '../actions/firebase';

const _config = {
	apiKey: "AIzaSyDMJte-Wd7gFXk2Awi9H4kJ4ah6BnI21Sw",
	authDomain: "minddb-ca25f.firebaseapp.com",
	databaseURL: "https://minddb-ca25f.firebaseio.com",
	projectId: "minddb-ca25f",
	storageBucket: "minddb-ca25f.appspot.com",
	messagingSenderId: "770914925629"
};

const firebaseApp = initializeApp(_config);

export const itemsRef = firebaseApp.database().ref('items');
const connectedRef = firebaseApp.database().ref('.info/connected');

export function syncFirebase(store) {
	itemsRef.on('child_added', (snapshot) => {
		store.dispatch(addItemSuccess(snapshot.val()))
	});

	itemsRef.on('child_removed', (snapshot) => {
		store.dispatch(removeItemSuccess(snapshot.val().id))
	});

	connectedRef.on('value', snap => {
		if (snap.val() === true) {
			store.dispatch(goOnline());

		} else {
			store.dispatch(goOffline())
		}
	});
}
