//@flow
import { Map } from 'immutable';

function addDatum(state, payload) {
    return state.set(payload.id, payload);
}

export default function data(state: Map<*, *> = Map(), action) {
    switch (action.type) {
        case 'ADD_DATUM':
            return addDatum(state, action.payload);
        default:
            return state;
    }

}