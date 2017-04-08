import { Map } from 'immutable';

export default function count(state: Map<*, *> = Map(), action) {
    console.log('ct reducer:', action.type, action.payload);

    switch (action.type) {
        case 'INCREMENT':
            return state
        default:
            return state;
    }

}