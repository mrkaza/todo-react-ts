import { authReducer } from 'modules/auth';
import { todoReducer } from 'modules/todo';
import { combineReducers, ReducersMapObject } from 'redux';

export interface AppState {
  auth: ReturnType<typeof authReducer>;
  todo: ReturnType<typeof todoReducer>;
}

const appReducer: ReducersMapObject<AppState> = {
  auth: authReducer,
  todo: todoReducer,
};

export const rootReducer = combineReducers(appReducer);

export type RootStore = ReturnType<typeof rootReducer>;
