export const GET_TODOS = 'GET_TODOS';

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

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
export interface deleteTodoI {
    type: typeof DELETE_TODO,
    payload: string
}
export interface completeTodoI {
    type: typeof COMPLETE_TODO,
    payload: string
}

export type TodoDispatchTypes = getTodos | addTodoI | addTodoError | deleteTodoI | completeTodoI