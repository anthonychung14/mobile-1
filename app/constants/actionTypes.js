const actionTypes = Object.freeze({
    item: {
        add: 'actionTypes/ITEM/ADD',
        delete: 'actionTypes/ITEM/DELETE',
        modify: 'actionTypes/ITEM/MODIFY',
    },
    user: {
        signup: 'actionTypes/USER/SIGNUP',
        login: 'actionTypes/USER/LOGIN',
        request: 'actionTypes/USER/REQUEST'
    },
    connection: {
        checked: 'actionTypes/CONNECTION/CHECKED',
        checking: 'actionTypes/CONNECTION/CHECKING'
        offline: 'actionTypes/CONNECTION/OFFLINE'
        online: 'actionTypes/CONNECTION/ONLINE'
        offline_loaded: 'actionTypes/CONNECTION/OFFLINE_LOADED'
    }
})