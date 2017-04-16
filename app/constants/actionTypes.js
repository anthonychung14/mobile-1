const actionTypes = Object.freeze({
    session: {
        CREATE: 'actionTypes/session/CREATE',
        RETRIEVE_CARDS: 'actionTypes/session/RETRIEVE_CARDS',
        UP_SWIPE: 'actionTypes/session/UP_SWIPE',
        LEFT_SWIPE: 'actionTypes/session/LEFT_SWIPE',
        RIGHT_SWIPE: 'actionTypes/session/RIGHT_SWIPE',
        DOWN_SWIPE: 'actionTypes/session/DOWN_SWIPE',
    },
    data: {
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