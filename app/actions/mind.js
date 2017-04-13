import uuid from 'uuid-v4'
import actionTypes from '../constants/actionTypes';

export const addItem = values => {
    const id = uuid();
    return {
        type: actionTypes.item.ADD,
        payload: values.set('id', id)
    };
}

export function deleteItem(id) {
    dataRef.child(id).remove()

    return {
        type: actionTypes.item.DELETE
    }
}
