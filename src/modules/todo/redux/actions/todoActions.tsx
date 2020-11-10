import {firestore} from '../../../../consts/fbConfig';
import {Dispatch} from 'redux';
import {TodoDispatchTypes, GET_TODOS} from '../../index';

export const getUserTodos = (userId:any) => {
    return (dispatch: Dispatch<TodoDispatchTypes>) => {
        const todos: object[] = []
        firestore.collection('todos').where('userId', '==', userId).get().then(response => {
            response.forEach(doc => {
                let todo = doc.data();
                todo.id = doc.id;
                todos.push(todo);
                console.log(todo);
            })
            dispatch({type: GET_TODOS, payload: todos})
        })
    }
}