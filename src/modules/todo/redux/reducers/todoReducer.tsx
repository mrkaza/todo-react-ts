import {GET_TODOS, ADD_TODO_ERROR, ADD_TODO, DELETE_TODO, COMPLETE_TODO, TODO_DETAILS, SEARCH_TODO, ORDER_TODOS, EDIT_TODO} from '../../index';

type InitState = {
    todos: null | object[],
    crudMessage: null | string,
    todo: null | object,
    search: null | string,
    orderBy : string
}

const initState: InitState = {
    todos: null,
    crudMessage: null,
    todo: null,
    search: null,
    orderBy: 'created.asc'
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
            return {
                ...state,
                crudMessage: action.payload
            }
        case COMPLETE_TODO:
            return {
                ...state,
                crudMessage: action.payload
            }
        // case EDIT_TODO:
        //     return {
        //         ...state,
        //         crudMessage: action.payload
        //     }
        case TODO_DETAILS: 
            return {
                ...state,
                todo: action.payload
            }
        case SEARCH_TODO:
            return {
                ...state,
                search: action.payload
            }
        case ORDER_TODOS:
            return {
                ...state,
                orderBy: action.payload
            }
        default:
            return state
    }
}
