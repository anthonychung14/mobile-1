import { Map } from 'immutable';

export default function count(state: Map<*, *> = Map(), action) {
    console.log('within the reducer', action.type)

    switch (action.type) {

        case 'INCREMENT':
            return state
        default:
            return state;
    }

}