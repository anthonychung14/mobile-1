import { combineEpics } from 'redux-observable';

import dataEpic from './data';

export const rootEpic = combineEpics(
  dataEpic
);