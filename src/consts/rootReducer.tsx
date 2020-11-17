import { combineReducers } from "redux";
import { authReducer } from "../modules/auth/index";
import { todoReducer } from "../modules/todo/index";

export const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;
