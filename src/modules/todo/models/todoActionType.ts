interface GetTodos {
  type: 'GET_TODOS';
  payload: Record<string, unknown>[];
}
interface AddTodo {
  type: 'ADD_TODO';
  payload: string;
}
interface AddTodoError {
  type: 'ADD_TODO_ERROR';
  payload: string;
}
interface DeleteTodo {
  type: 'DELETE_TODO';
  payload: string;
}
interface CompleteTodo {
  type: 'COMPLETE_TODO';
  payload: string;
}
interface EditTodo {
  type: 'EDIT_TODO';
  payload: string;
}
interface TodoDetails {
  type: 'TODO_DETAILS';
  payload: any;
}
interface SearchTodo {
  type: 'SEARCH_TODO';
  payload: string;
}
interface OrderTodos {
  type: 'ORDER_TODOS';
  payload: string;
}
interface RemoveCrud {
  type: 'REMOVE_CRUD';
}

export type TodoDispatchTypes =
  | GetTodos
  | AddTodo
  | AddTodoError
  | DeleteTodo
  | CompleteTodo
  | TodoDetails
  | SearchTodo
  | OrderTodos
  | EditTodo
  | RemoveCrud;
