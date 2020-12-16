import { TodoActionTypes } from 'modules/todo';

import { TodoState } from '../models';

type TodoReducer = (state: TodoState | undefined, action: any) => TodoState;

const INIT_STATE: TodoState = {
  todos: null,
  crudMessage: null,
  todo: null,
  search: null,
  orderBy: 'created.asc',
};

export const todoReducer: TodoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.GetTodos:
      return {
        ...state,
        todos: action.payload,
      };
    case TodoActionTypes.AddTodo:
      return {
        ...state,
        crudMessage: action.payload.message,
      };
    case TodoActionTypes.AddTodoError:
      return {
        ...state,
        crudMessage: action.payload.message,
      };
    case TodoActionTypes.DeleteTodo:
      return {
        ...state,
        crudMessage: action.payload.message,
      };
    case TodoActionTypes.CompleteTodo:
      return {
        ...state,
        crudMessage: action.payload.message,
      };
    case TodoActionTypes.EditTodo:
      return {
        ...state,
        crudMessage: action.payload.message,
      };
    case TodoActionTypes.TodoDetail:
      return {
        ...state,
        todo: action.payload,
      };
    case TodoActionTypes.Search:
      return {
        ...state,
        search: action.payload,
      };
    case TodoActionTypes.Order:
      return {
        ...state,
        orderBy: action.payload,
      };
    case TodoActionTypes.RemoveCrud:
      return {
        ...state,
        crudMessage: null,
      };
    default:
      return state;
  }
};
