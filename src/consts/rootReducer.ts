import { authReducer } from 'modules/auth';
import { todoReducer } from 'modules/todo';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;
