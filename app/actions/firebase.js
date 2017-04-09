import offline from 'react-native-simple-store';

export const OFFLINE_ITEMS_LOADED = 'OFFLINE_ITEMS_LOADED'
export const CONNECTION_CHECKING = 'CONNECTION_CHECKING'
export const CONNECTION_CHECKED = 'CONNECTION_CHECKED'
export const CONNECTION_ONLINE = 'CONNECTION_ONLINE'
export const CONNECTION_OFFLINE = 'CONNECTION_OFFLINE'

export function goOnline() {
	return {
		type: CONNECTION_ONLINE
  	}
}

export function goOffline() {
	return {
		type: CONNECTION_OFFLINE
 	}
}

function offlineItemsLoaded(items) {
	return {
		type: OFFLINE_ITEMS_LOADED,
		items: items
  	}
}

export function loadOfflineItems() {
	return dispatch => {
		offline.get('items').then(items => {
		  dispatch(offlineItemsLoaded(items || []))
		})
	}
}

export function checkConnection() {
	return dispatch => {
		dispatch({type: CONNECTION_CHECKING})
		setTimeout(() => dispatch({type: CONNECTION_CHECKED}), 5000)
	}
}

