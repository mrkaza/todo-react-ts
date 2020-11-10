import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootStore} from '../../consts/rootReducer';
import {firestore} from '../../consts/fbConfig'
import {getUserTodos} from './redux/actions/todoActions'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm';


export * from './redux/reducers/todoReducer';
export * from './redux/actions/todoActionType';
export * from './redux/actions/todoActions';

const Todo = () => {

    const dispatch = useDispatch();
    const user = useSelector((state:RootStore) => state.auth.user);

    const userId = user.user.uid;
    const todos = useSelector((state:RootStore) => state.todo.todos);
    useEffect(() => {
        firestore.collection('todos').onSnapshot(() => {
            dispatch(getUserTodos(userId));
        })
    }, [])


    return (
        <div className="container">
        <div className="row">
            <div className="col s12">
                <TodoForm />
            </div>
            {todos && todos.length === 0 ? (
                <div className="col s12">
                    No todos.
                </div>
            ) : (
                <div className="col s12">
                    {todos && todos.map((todo:any) => {
                        return (
                            <TodoItem todo={todo} key={todo.id} />
                        )
                    })}
                </div>
            )}
        </div>
    </div>
    )
}

export default Todo;