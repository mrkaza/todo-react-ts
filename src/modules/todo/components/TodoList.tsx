import React, { Suspense } from 'react';

const TodoList: React.FC = () => {
  const LazyList = React.lazy(() => import('./LazyList'));

  return (
    <Suspense fallback={<div>Loading todo list</div>}>
      <LazyList />
    </Suspense>
  );
};

export default TodoList;
