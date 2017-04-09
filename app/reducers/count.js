import { Map } from 'immutable';

export default function count(state: Map<*, *> = Map(), action) {
    switch (action.type) {
        case 'INCREMENT':
            return state
        default:
            return state;
    }

}