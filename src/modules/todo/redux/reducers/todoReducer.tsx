import {GET_TODOS, ADD_TODO_ERROR, ADD_TODO, DELETE_TODO, COMPLETE_TODO, TODO_DETAILS} from '../../index';

type InitState = {
    todos: null | object[],
    crudMessage: null | string,
    todo: null | object
}

const initState: InitState = {
    todos: null,
    crudMessage: null,
    todo: null
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
        case DELETE_TODO: 
            console.log(action.payload)
            return {
                ...state,
                crudMessage: action.payload
            }
        case COMPLETE_TODO:
            return {
                ...state,
                crudMessage: action.payload
            }
        case TODO_DETAILS: 
            return {
                ...state,
                todo: action.payload
            }
        default:
            return state
    }
}
