import { authReducer } from 'modules/auth';
import { todoReducer } from 'modules/todo';
import { combineReducers, ReducersMapObject } from 'redux';

import { AppState } from './models';

const appReducer: ReducersMapObject<AppState> = {
  auth: authReducer,
  todo: todoReducer,
};

export const rootReducer = combineReducers(appReducer);

export type RootStore = ReturnType<typeof rootReducer>;
