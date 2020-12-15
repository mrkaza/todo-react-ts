// import { RootStore } from 'consts';
// import React, { Suspense } from 'react';
// import { useSelector } from 'react-redux';

// const LazyList = React.lazy(() => import('./LazyList'));

// const TodoList: React.FC = () => {
//   // const LazyList = React.lazy(() => import('./LazyList'));
//   const todos = useSelector((state: RootStore) => state.todo.todos);
//   console.log(todos);
//   return (
//     <div>
//       <Suspense fallback={<div>loading list</div>}>
//         <LazyList />
//       </Suspense>
//     </div>
//   );
// };

// export default TodoList;

import React from 'react';

export const TodoList = () => {
  return <div>hej</div>;
};
