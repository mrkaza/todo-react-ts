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

  AddTodo: (): Action<typeof TodoActionTypes.AddTodo> =>
    createAction(TodoActionTypes.AddTodo),

  AddTodoError: (): Action<typeof TodoActionTypes.AddTodoError> =>
    createAction(TodoActionTypes.AddTodoError),

  DeleteTodo: (): Action<typeof TodoActionTypes.DeleteTodo> =>
    createAction(TodoActionTypes.DeleteTodo),

  CompleteTodo: (): Action<typeof TodoActionTypes.CompleteTodo> =>
    createAction(TodoActionTypes.CompleteTodo),

  TodoDetails: (
    todo: firebase.firestore.DocumentData | undefined,
  ): ActionWithPayload<typeof TodoActionTypes.TodoDetail, typeof todo> =>
    createAction(TodoActionTypes.TodoDetail, todo),

  EditTodo: (): Action<typeof TodoActionTypes.EditTodo> =>
    createAction(TodoActionTypes.EditTodo),
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
