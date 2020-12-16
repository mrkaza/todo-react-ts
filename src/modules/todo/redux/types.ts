enum GetTodoActionTypes {
  Search = 'SEARCH',
  Order = 'ORDER',
  RemoveCrud = 'REMOVE_CRUD',
  GetTodos = 'GET_TODOS',
  AddTodo = 'ADD_TODO',
  AddTodoError = 'ADD_TODO_ERROR',
  DeleteTodo = 'DELETE_TODO',
  CompleteTodo = 'COMPLETE_TODO',
  TodoDetail = 'TODO_DETAILS',
  EditTodo = 'EDIT_TODO',
}

export const TodoActionTypes = {
  ...GetTodoActionTypes,
};
