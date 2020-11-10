import {GET_TODOS} from '../../index';

type InitState = {
    todos: null | object[]
}

const initState: InitState = {
    todos: null
}

export const todoReducer = (state:InitState=initState, action:any) => {
    switch(action.type) {
        case GET_TODOS:
            console.log('got todos', action.payload)
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state
    }
}