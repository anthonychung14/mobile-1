import { Observable } from 'rxjs/Observable';

import actionTypes from '../constants/actionTypes';
import { fetchData } from '../constants/api';
import { itemsRef } from '../store/firebase';

const apiSource = () => (action$, store) =>
    Observable.flatMap(options =>
        Observable.fromPromise(
            fetchData(options)
        )
    );

export const addItemEpic = action$ =>
    action$
        .ofType(actionTypes.item.ADD)
        .flatMap(({ payload }) =>
            Observable.fromPromise(fetchData(payload))
        )
        .map(result =>
            ({ type: actionTypes.item.SUCCESS, payload: result })
        );

