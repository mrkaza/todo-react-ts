import { RootStore } from 'consts';
import { UserType } from 'modules/auth';
import { firestore } from 'modules/firebase';
import { getUserTodos } from 'modules/todo';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CrudMessage from './CrudMessage';
import TodoFilter from './TodoFilter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export const Todo = () => {
  const dispatch = useDispatch();
  const user: UserType = useSelector((state: RootStore) => state.auth.user);
  const userId: string = user.user.uid;

  useEffect(() => {
    firestore.collection('todos').onSnapshot(() => {
      dispatch(getUserTodos(userId));
    });
  }, [dispatch, userId]);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <TodoForm />
        </div>
        <TodoFilter />
        <CrudMessage />
        <TodoList />
      </div>
    </div>
  );
};
