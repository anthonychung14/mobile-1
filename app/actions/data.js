import uuid from 'uuid-v4'

import { itemsRef } from '../store/firebase';

export const ADD_ITEM = 'ADD_ITEM'
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS'

export const addItem = values => {
    itemRef.set({
        id,
        title: title,
        time: new Date().getTime()
    });
    return ({
        type: ADD_ITEM,
        payload: { id: uuid(), ...values }
    });
}

export function addItemSuccess(itemData) {
    return {
        type: ADD_ITEM_SUCCESS,
        itemData: itemData
    }
}

export function removeItem(id) {
    itemsRef.child(id).remove()

    return {
        type: REMOVE_ITEM,
    }
}

export function removeItemSuccess(id) {
    return {
        type: REMOVE_ITEM_SUCCESS,
        id: id
    }
}