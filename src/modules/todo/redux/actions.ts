import firebase from 'firebase';
import {
  Action,
  ActionUnion,
  ActionWithPayload,
  createAction,
} from 'modules/redux';
import { Dispatch, TodoActionTypes, TodoType } from 'modules/todo';

export const TodoActions = {
  Search: (
    search: string | null,
  ): ActionWithPayload<typeof TodoActionTypes.Search, typeof search> =>
    createAction(TodoActionTypes.Search, search),

  Order: (
    orderBy: string,
  ): ActionWithPayload<typeof TodoActionTypes.Order, typeof orderBy> =>
    createAction(TodoActionTypes.Order, orderBy),

  RemoveCrud: (): Action<typeof TodoActionTypes.RemoveCrud> =>
    createAction(TodoActionTypes.RemoveCrud),

  GetTodos: (
    todos: TodoType[],
  ): ActionWithPayload<typeof TodoActionTypes.GetTodos, typeof todos> =>
    createAction(TodoActionTypes.GetTodos, todos),

  AddTodo: (crud: {
    message: string;
  }): ActionWithPayload<typeof TodoActionTypes.AddTodo, typeof crud> =>
    createAction(TodoActionTypes.AddTodo, crud),

  AddTodoError: (crud: {
    message: string;
  }): ActionWithPayload<typeof TodoActionTypes.AddTodoError, typeof crud> =>
    createAction(TodoActionTypes.AddTodoError, crud),

  DeleteTodo: (crud: {
    message: string;
  }): ActionWithPayload<typeof TodoActionTypes.DeleteTodo, typeof crud> =>
    createAction(TodoActionTypes.DeleteTodo, crud),

  CompleteTodo: (crud: {
    message: string;
  }): ActionWithPayload<typeof TodoActionTypes.CompleteTodo, typeof crud> =>
    createAction(TodoActionTypes.CompleteTodo, crud),

  TodoDetails: (
    todo: firebase.firestore.DocumentData | undefined,
  ): ActionWithPayload<typeof TodoActionTypes.TodoDetail, typeof todo> =>
    createAction(TodoActionTypes.TodoDetail, todo),

  EditTodo: (crud: {
    message: string;
  }): ActionWithPayload<typeof TodoActionTypes.EditTodo, typeof crud> =>
    createAction(TodoActionTypes.EditTodo, crud),
};

export type TodoActions = ActionUnion<typeof TodoActions>;

export const searchTodo = (search: string | null): Dispatch => {
  return TodoActions.Search(search);
};

export const orderTodos = (orderBy: string): Dispatch => {
  return TodoActions.Order(orderBy);
};

export const removeCrud = (): Dispatch => {
  return TodoActions.RemoveCrud();
};
