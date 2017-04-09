const actionTypes = Object.freeze({
    item: {
        ADD: 'actionTypes/item/ADD',
        DELETE: 'actionTypes/item/DELETE',
        SUCCESS: 'actionTypes/item/SUCCESS',
        MODIFY: 'actionTypes/item/MODIFY',
    },
    user: {
        SIGNUP: 'actionTypes/user/SIGNUP',
        LOGIN: 'actionTypes/user/LOGIN',
        REQUEST: 'actionTypes/user/REQUEST'
    },
    connection: {
        CHECKED: 'actionTypes/connection/CHECKED',
        CHECKING: 'actionTypes/connection/CHECKING',
        OFFLINE: 'actionTypes/connection/OFFLINE',
        ONLINE: 'actionTypes/connection/ONLINE',
        OFFLINE_LOADED: 'actionTypes/connection/OFFLINE_LOADED'
    }
});

export default actionTypes;