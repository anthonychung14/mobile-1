import { Map } from 'immutable';
// import { inst } from '../configureStore';

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form/immutable'

import data from './data';
import cards from './cards';

export const rootReducer = (state: ReduxState = Map(), action: ReduxAction) => {
    return Map({
        data: data(state.get('data'), action),
        form: form(state.get('form'), action),
        cards: cards(state.get('cards'), action)
    });
};