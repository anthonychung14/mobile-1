import { Observable } from 'rxjs/Observable';
import { fetchData } from '../constants/api';

export const pingEpic = action$ =>
    action$.ofType('PING')
        .mapTo({ type: 'PONG' })

const source = Observable
    .interval(1000)
    .do(x => console.log('intervaling'))
    .flatMap(() => Observable.fromPromise(fetchData()))

export const intervalEpic = (action$, store) =>
    action$
        .ofType('INTERVAL')
        .switchMap(() =>
            source
                .map(x => ({ type: 'UPDATE_DATA', payload: x }))
                .takeUntil(action$.ofType('INCREMENT'))
        );

