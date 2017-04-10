import { combineEpics } from 'redux-observable';
import { intervalEpic } from './interval';
import { pingEpic } from './ping';
import { addItemEpic } from './mind';

export const rootEpic = combineEpics(
  pingEpic,
  intervalEpic,
  addItemEpic,
);