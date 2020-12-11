interface Dispatch {
  type: string;
  payload?: string | null;
}

export const searchTodo = (search: string | null): Dispatch => {
  return {
    type: 'SEARCH_TODO',
    payload: search,
  };
};

export const orderTodos = (orderBy: string): Dispatch => {
  return {
    type: 'ORDER_TODOS',
    payload: orderBy,
  };
};

export const removeCrud = (): Dispatch => {
  return {
    type: 'REMOVE_CRUD',
  };
};
