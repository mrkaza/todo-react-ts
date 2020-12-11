import { combineReducers } from "redux";
import { authReducer } from "modules/auth";
import { todoReducer } from "modules/todo";

export const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;
