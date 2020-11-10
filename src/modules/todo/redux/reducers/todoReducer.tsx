import {GET_TODOS, ADD_TODO_ERROR, ADD_TODO} from '../../index';

type InitState = {
    todos: null | object[],
    crudMessage: null | string
}

const initState: InitState = {
    todos: null,
    crudMessage: null
}

export const todoReducer = (state:InitState=initState, action:any) => {
    switch(action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case ADD_TODO: 
            return {
                ...state,
                crudMessage: action.payload
            }
        case ADD_TODO_ERROR:
            return {
                ...state,
                crudMessage: action.payload
            }
        default:
            return state
    }
}
