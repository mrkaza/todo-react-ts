export const GET_TODOS = 'GET_TODOS';

export interface getTodos  {
    type: typeof GET_TODOS,
    payload: object[]
}

export type TodoDispatchTypes = getTodos