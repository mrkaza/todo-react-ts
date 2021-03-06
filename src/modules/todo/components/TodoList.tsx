import { selector } from 'modules/todo';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

const LazyList = React.lazy(() => import('./LazyList'));

const TodoList: React.FC = () => {
  const todos = useSelector(selector);

  return (
    <div className="todo-list mt-md mb-md">
      {todos && !todos.length ? (
        <div className="t-center t-error">
          No todos matching your parameters.
        </div>
      ) : (
        <Suspense fallback={<div>Loading</div>}>
          <LazyList />
        </Suspense>
      )}
    </div>
  );
};

export default TodoList;
