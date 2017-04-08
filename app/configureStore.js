/* eslint global-require: 0 */

import Immutable from 'immutable';
import { Platform } from 'react-native';

import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer }  from './reducers';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);
let composeEnhancers = compose;

// if (__DEV__) {
//     // Development mode with Redux DevTools support enabled.
//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//             // Prevents Redux DevTools from re-dispatching all previous actions.
//             shouldHotReload: false
//         }) : compose;
//     // Create the redux store.
//     store = createStore(rootReducer, composeEnhancers(...enhancers));
// } else {
//     // Production mode.
//     store = createStore(rootReducer, compose(...enhancers));
// }

const enhancer = composeEnhancers(
    applyMiddleware(epicMiddleware)
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept(() => {
          store.replaceReducer(require('./reducers').default);
        });
    }

  return store;
}