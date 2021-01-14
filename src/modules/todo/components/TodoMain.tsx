import { firestore } from 'modules/firebase';
import { RootStore } from 'modules/redux';
import { getUserTodos } from 'modules/todo';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OrderBy from './OrderBy';
import Search from './Search';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export const Todo: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.auth.user);
  const userId = user?.user?.uid;

  useEffect(() => {
    if (userId) {
      firestore.collection('todos').onSnapshot(() => {
        dispatch(getUserTodos(userId));
      });
    }
  }, [dispatch, userId]);

  return (
    <div className="todo">
      <TodoForm />
      <Search />
      <TodoList />
      <OrderBy />
    </div>
  );
};
