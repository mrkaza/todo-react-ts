import { RootStore } from 'consts';
import { firestore } from 'modules/firebase';
import { getUserTodos } from 'modules/todo';
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CrudMessage from './CrudMessage';
import TodoFilter from './TodoFilter';
import TodoForm from './TodoForm';
// import TodoList from './TodoList';
const LazyList = React.lazy(() => import('./LazyList'));

export const Todo: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.auth.user);
  const userId: string = user?.user.uid ?? '';

  useEffect(() => {
    if (userId) {
      firestore.collection('todos').onSnapshot(() => {
        dispatch(getUserTodos(userId));
      });
    }
  }, [dispatch, userId]);

  return (
    <div>
      <div className="col s12">
        <TodoForm />
      </div>
      <TodoFilter />
      <CrudMessage />
      <Suspense fallback={<div>Loading todo list</div>}>
        <LazyList />
      </Suspense>
    </div>
  );
};
