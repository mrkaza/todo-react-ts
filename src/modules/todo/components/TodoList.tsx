import { selector } from 'modules/todo';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

const LazyList = React.lazy(() => import('./LazyList'));

const TodoList: React.FC = () => {
  const todos = useSelector(selector);
  console.log(todos);

  return (
    <div>
      {todos && !todos.length ? (
        <Suspense fallback={<div>Loading</div>}>
          <div className="col s12 no-todos">
            No todos matching your parameters.
          </div>
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading</div>}>
          <LazyList />
        </Suspense>
      )}
    </div>
  );
};

export default TodoList;
