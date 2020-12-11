export const searchTodo = (search: string | null) => {
  return {
    type: 'SEARCH_TODO',
    payload: search,
  };
};

export const orderTodos = (orderBy: string) => {
  return {
    type: 'ORDER_TODOS',
    payload: orderBy,
  };
};

export const removeCrud = () => {
  return {
    type: 'REMOVE_CRUD',
  };
};
