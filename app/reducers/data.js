//@flow
import { Map } from 'immutable';
import actionTypes from '../constants/actionTypes';

function addDatum(state, payload) {
    const id = payload.get('id');
    return state.set(id, payload);
}

function incrementCardCount(state, payload) {
    const count = state.get('count', 0);
    return state.set('count', count + 1);
}

export default function data(state: Map<*, *> = Map(), action) {
    console.log(action.type, action.payload, '------- STATE ----- ');

    switch (action.type) {
        case actionTypes.data.ADD:
            return addDatum(state, action.payload);
        case actionTypes.data.SUCCESS:
            return incrementCardCount(state, action.payload)
        default:
            return state;
    }

}