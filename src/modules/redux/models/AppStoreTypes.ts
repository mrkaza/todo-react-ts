import { authReducer } from 'modules/auth';
import { todoReducer } from 'modules/todo';

export interface AppState {
  auth: ReturnType<typeof authReducer>;
  todo: ReturnType<typeof todoReducer>;
}
