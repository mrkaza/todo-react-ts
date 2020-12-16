import { TodoActions, TodoActionTypes } from 'modules/todo';

interface Dispatch {
  type: string;
  payload?: string | null;
}

export const searchTodo = (search: string | null): Dispatch => {
  return TodoActions.Search(search);
};

export const orderTodos = (orderBy: string): Dispatch => {
  return TodoActions.Order(orderBy);
};

export const removeCrud = (): Dispatch => {
  return TodoActions.RemoveCrud();
};
