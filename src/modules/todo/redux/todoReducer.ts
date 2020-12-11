export type TodoType = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  userId: string;
  createdAt: { nanoseconds: string; seconds: string; toDate(): any };
};

type InitState = {
  todos: null | TodoType[];
  crudMessage: null | string;
  todo: null | TodoType;
  search: null | string;
  orderBy: string;
};

const initState: InitState = {
  todos: null,
  crudMessage: null,
  todo: null,
  search: null,
  orderBy: 'created.asc',
};

export const todoReducer = (state: InitState = initState, action: any) => {
  switch (action.type) {
    case 'GET_TODOS':
      return {
        ...state,
        todos: action.payload,
      };
    case 'ADD_TODO':
      return {
        ...state,
        crudMessage: action.payload,
      };
    case 'ADD_TODO_ERROR':
      return {
        ...state,
        crudMessage: action.payload,
      };
    case 'DELETE_TODO':
      return {
        ...state,
        crudMessage: action.payload,
      };
    case 'COMPLETE_TODO':
      return {
        ...state,
        crudMessage: action.payload,
      };
    case 'EDIT_TODO':
      return {
        ...state,
        crudMessage: action.payload,
      };
    case 'TODO_DETAILS':
      return {
        ...state,
        todo: action.payload,
      };
    case 'SEARCH_TODO':
      return {
        ...state,
        search: action.payload,
      };
    case 'ORDER_TODOS':
      return {
        ...state,
        orderBy: action.payload,
      };
    case 'REMOVE_CRUD':
      return {
        ...state,
        crudMessage: null,
      };
    default:
      return state;
  }
};
