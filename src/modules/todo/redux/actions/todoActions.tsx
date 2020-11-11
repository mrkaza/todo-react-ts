import {firestore} from '../../../../consts/fbConfig';
import {Dispatch} from 'redux';
import {TodoDispatchTypes, GET_TODOS, ADD_TODO, ADD_TODO_ERROR, DELETE_TODO, COMPLETE_TODO, TODO_DETAILS, SEARCH_TODO} from '../../index';

export const getUserTodos = (userId:any) => {
    return (dispatch: Dispatch<TodoDispatchTypes>) => {
        const todos: object[] = []
        firestore.collection('todos').where('userId', '==', userId).get().then(response => {
            response.forEach(doc => {
                let todo = doc.data();
                todo.id = doc.id;
                todos.push(todo);
            })
            dispatch({type: GET_TODOS, payload: todos})
        })
    }
}

export const addTodo = (todo:{title:string,description:string}, userId:string) => {
    return (dispatch: Dispatch<TodoDispatchTypes>) => {
        firestore.collection('todos').add({
            title:todo.title,
            description: todo.description,
            completed: false,
            createdAt: new Date(),
            userId: userId
        }).then(() => {
            dispatch({type:ADD_TODO, payload: 'Todo added!'})
        }).catch(() => {
            dispatch({type: ADD_TODO_ERROR, payload:'There was a probem adding todo.'})
        })
    }
}

export const deleteTodo = (id:string) => {
    return (dispatch: Dispatch<TodoDispatchTypes>) => {
        firestore.collection('todos').doc(id).delete().then(() => {
            dispatch({type:DELETE_TODO, payload: 'Todo deleted!'})
        })
    }
}

export const completeTodo = (id:string) => {
    return (dispatch: Dispatch<TodoDispatchTypes>) => {
        firestore.collection('todos').doc(id).update({
            completed: true
        }).then(() => {
            dispatch({type:COMPLETE_TODO, payload: 'Todo Completed!'})
        })
    }
}

export const todoDetails = (id:string) =>{
    return (dispatch: Dispatch<TodoDispatchTypes>) => {
        firestore.collection('todos').doc(id).get().then((doc)=> {
            dispatch({type:TODO_DETAILS, payload: doc.data()})
        })
    }
}

export const searchTodo = (search:string|null) => {
    return {
        type: SEARCH_TODO,
        payload: search
    }
}