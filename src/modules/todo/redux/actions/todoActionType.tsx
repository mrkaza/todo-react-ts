export const GET_TODOS = 'GET_TODOS';

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';

export interface getTodos  {
    type: typeof GET_TODOS,
    payload: object[]
}

export interface addTodoI {
    type: typeof ADD_TODO,
    payload: string
}
export interface addTodoError {
    type: typeof ADD_TODO_ERROR,
    payload: string
}
export type TodoDispatchTypes = getTodos | addTodoI | addTodoError