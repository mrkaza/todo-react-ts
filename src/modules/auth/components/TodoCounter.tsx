import { RootStore } from 'modules/redux';
import { getTodoCount } from 'modules/todo';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const TodoCounter: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoCount());
  });

  const todoStatus = useSelector((state: RootStore) => state.todo.todoCount);
  const statusPercent = (
    (todoStatus.completed / todoStatus.cocunt) *
    100
  ).toFixed(2);

  return (
    <div>
      {todoStatus ? (
        <div className="f f-justify-between">
          <p>Todos Count: {todoStatus.count}</p>
          <p>Todos Completed: {todoStatus.completed}</p>
          <p>Todos Completed %: {statusPercent}%</p>
        </div>
      ) : (
        <p>Todo count loading</p>
      )}
    </div>
  );
};
