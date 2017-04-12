import { Observable } from 'rxjs/Observable';

import actionTypes from '../constants/actionTypes';
import { postData } from '../constants/api';
import { dataRef } from '../store/firebase';

const apiSource = () => (action$, store) =>
    Observable.flatMap(action => Observable.fromPromise(fetchData(options)));

export const addItemEpic = action$ =>
    action$
        .ofType(actionTypes.item.ADD)
        .flatMap(({ payload }) => {
            console.log(payload.toJS(), 'what is this then')
            return Observable.fromPromise(postData(payload.toJS()))
        })
        .map(result => ({ type: actionTypes.item.SUCCESS, payload: result }));

// import { Observable } from 'rxjs/Observable';

// import actionTypes from '../constants/actionTypes';
// import { fetchData } from '../constants/api';
// import { dataRef } from '../store/firebase';

// const apiSource = () => (action$, store) =>
//     Observable.flatMap(action => Observable.fromPromise(fetchData(options)));

// export const addItemEpic = action$ =>
//     action$
//         .ofType(actionTypes.item.ADD)
//         .do(x => console.log(x, 'addItemEpic'))
//         .mergeMap((action) =>
//             Observable.flatMap(x =>
//                 Observable.fromPromise(fetchData(action.payload))
//             )
//             .do(x => console.log('more do stuff', x))
//             .map(result => ({ type: actionTypes.item.SUCCESS, payload: result }))
//         })

