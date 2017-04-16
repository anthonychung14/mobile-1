import { createAction } from 'redux-actions';
import { Observable } from 'rxjs/Observable';

import actionTypes from '../constants/actionTypes';
import { postSession } from '../constants/api';

// export const createSession = createAction(actionTypes.session.CREATE);
export const createSession = () => ({ type: actionTypes.session.CREATE });
export const createSessionEpic = (action$, store) => {
    console.log(action$, store, 'createSessionEpic args');
    return action$.ofType(actionTypes.session.CREATE)
        .flatMap(action => {
            console.log(action, 'should be the CREATE obj')
            return Observable.fromPromise(
                postSession({ data: 'test string' })
            ).map(
                (payload) => ({ type: actionTypes.session.RETRIEVE_CARDS, payload })
            ).startWith({ type: 'CARD_RETRIEVAL_PENDING' })
        });
};