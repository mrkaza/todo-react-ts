export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TODO_DETAILS = "TODO_DETAILS";
export const SEARCH_TODO = "SEARCH_TODO";
export const ORDER_TODOS = "ORDER_TODOS";
export const REMOVE_CRUD = "REMOVE_CRUD";

export interface getTodos {
  type: typeof GET_TODOS;
  payload: object[];
}

export interface addTodoI {
  type: typeof ADD_TODO;
  payload: string;
}
export interface addTodoError {
  type: typeof ADD_TODO_ERROR;
  payload: string;
}
export interface deleteTodoI {
  type: typeof DELETE_TODO;
  payload: string;
}
export interface completeTodoI {
  type: typeof COMPLETE_TODO;
  payload: string;
}
export interface editTodoI {
  type: typeof EDIT_TODO;
  payload: string;
}
export interface todoDetailsI {
  type: typeof TODO_DETAILS;
  payload: any;
}
export interface searchTodoI {
  type: typeof SEARCH_TODO;
  payload: string;
}
export interface orderTodosI {
  type: typeof ORDER_TODOS;
  payload: string;
}
export interface removeCrudI {
  type: typeof REMOVE_CRUD;
}
export type TodoDispatchTypes =
  | getTodos
  | addTodoI
  | addTodoError
  | deleteTodoI
  | completeTodoI
  | todoDetailsI
  | searchTodoI
  | orderTodosI
  | editTodoI
  | removeCrudI;
