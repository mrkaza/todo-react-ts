import { selector, TodoType } from 'modules/todo';
import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

const LazyList: React.FC = () => {
  const todos = useSelector(selector);

  return (
    <div>
      {todos &&
        todos.map((todo: TodoType) => {
          return <TodoItem todo={todo} key={todo?.id} />;
        })}
    </div>
  );
};

export default LazyList;
