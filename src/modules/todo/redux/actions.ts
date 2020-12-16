import firebase from 'firebase';
import { ActionUnion, createAction } from 'modules/redux';
import { TodoActionTypes } from 'modules/todo';

export const TodoActions = {
  Search: (search: string | null) =>
    createAction(TodoActionTypes.Search, search),

  Order: (orderBy: string | null) =>
    createAction(TodoActionTypes.Order, orderBy),

  RemoveCrud: () => createAction(TodoActionTypes.RemoveCrud),

  GetTodos: (todos: Record<string, unknown>[]) =>
    createAction(TodoActionTypes.GetTodos, todos),

  AddTodo: (crud: { message: string }) =>
    createAction(TodoActionTypes.AddTodo, crud),

  AddTodoError: (crud: { message: string }) =>
    createAction(TodoActionTypes.AddTodoError, crud),

  DeleteTodo: (crud: { message: string }) =>
    createAction(TodoActionTypes.DeleteTodo, crud),

  CompleteTodo: (crud: { message: string }) =>
    createAction(TodoActionTypes.CompleteTodo, crud),

  TodoDetails: (todo: any) => createAction(TodoActionTypes.TodoDetail, todo),

  EditTodo: (crud: { message: string }) =>
    createAction(TodoActionTypes.EditTodo, crud),
};

export type TodoActions = ActionUnion<typeof TodoActions>;
