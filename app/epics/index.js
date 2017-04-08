import { combineEpics } from 'redux-observable';
import { intervalEpic } from './interval';
import { pingEpic } from './ping';

export const rootEpic = combineEpics(
  pingEpic,
  intervalEpic
);