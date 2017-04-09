import { Map } from 'immutable';

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form/immutable'
import count from './count';
import data from './data';

export const rootReducer = (state: ReduxState = Map(), action: ReduxAction) => {
    return Map({
        data: data(state.get('data'), action),
        count: count(state.get('count'), action),
        form: form(state.get('form'), action)
    });
};