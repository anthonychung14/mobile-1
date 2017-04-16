import { createSelector } from 'reselect';

export const getCardsForSession = state =>
    state.get('cards')