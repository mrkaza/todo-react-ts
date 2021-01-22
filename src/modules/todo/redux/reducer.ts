import { TodoActions, TodoActionTypes } from 'modules/todo';

import { TodoState } from '../models';

type TodoReducer = (
  state: TodoState | undefined,
  action: TodoActions,
) => TodoState;

const INIT_STATE: TodoState = {
  todos: null,
  search: null,
  orderBy: 'created.asc',
  todo: null,
  todoCount: null,
};

export const todoReducer: TodoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.GetTodos:
      return {
        ...state,
        todos: action.payload,
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
    case TodoActionTypes.GetCount:
      return {
        ...state,
        todoCount: action.payload,
      };
    default:
      return state;
  }
};
