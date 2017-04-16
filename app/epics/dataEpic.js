import { Observable } from 'rxjs/Observable';
import uuid from 'uuid-v4'

import actionTypes from '../constants/actionTypes';
import { postData, } from '../constants/api';
import { dataRef } from '../store/firebase';


export const addData = values => ({
    type: actionTypes.data.ADD,
    payload: values.set('id', uuid())
});

export const addDataEpic = (action$) =>
    action$
        .ofType(actionTypes.data.ADD)
        .flatMap(({ payload }) => {
            return Observable.fromPromise(postData(payload.toJS()))
        })
        .map(result => ({ type: actionTypes.data.SUCCESS, payload: result }));

// get direction from payload, infer value
// append cardDataQuestion to firebase user's card session
//
// export const watchEpic = (action$, store) =>
//     action$
//         .ofType(actionTypes.data.ADD)
//         .map(x => ({ type: actionTypes.session.SWIPE_LEFT }));
// import { Observable } from 'rxjs/Observable';

// import actionTypes from '../constants/actionTypes';
// import { fetchData } from '../constants/api';
// import { dataRef } from '../store/firebase';

// const apiSource = () => (action$, store) =>
//     Observable.flatMap(action => Observable.fromPromise(fetchData(options)));

// export const addDataEpic = action$ =>
//     action$
//         .ofType(actionTypes.item.ADD)
//         .do(x => console.log(x, 'addDataEpic'))
//         .mergeMap((action) =>
//             Observable.flatMap(x =>
//                 Observable.fromPromise(fetchData(action.payload))
//             )
//             .do(x => console.log('more do stuff', x))
//             .map(result => ({ type: actionTypes.item.SUCCESS, payload: result }))
//         })

