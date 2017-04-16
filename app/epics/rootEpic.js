import { combineEpics } from 'redux-observable';

import { addDataEpic } from './dataEpic';
import { createSessionEpic } from './sessionEpic';

const rootEpic = combineEpics(
  addDataEpic,
  createSessionEpic,
);

export default rootEpic