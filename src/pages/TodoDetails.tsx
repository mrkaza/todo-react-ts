import { format } from 'date-fns';
import { RootStore } from 'modules/redux';
import { todoDetails } from 'modules/todo';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const TodoDetails: React.FC = () => {
  const dispatch = useDispatch();
  const routeParams: { id: string } = useParams();
  const id: string = routeParams.id;

  useEffect(() => {
    dispatch(todoDetails(id));
  }, [id, dispatch]);

  const todo = useSelector((state: RootStore) => state.todo.todo);
  return (
    <div>
      {todo ? (
        <div>
          <header>
            <h1 className="text-center">Todo: {todo.title}</h1>
          </header>
          <article className="todo-item">
            <h1 className="todo-item__title">{todo.title}</h1>
            <p className="todo-item__description">{todo.description}</p>
            <div className="flex-space-between">
              <p className="todo-item__created-at">
                Created at:
                {format(todo.createdAt.toDate(), 'do MMM yyyy, H:mm')}
              </p>
              {todo.completed ? (
                <p className="todo-item__completed">Completed: true</p>
              ) : (
                <p className="todo-item__completed">Completed: false</p>
              )}
            </div>
          </article>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export { TodoDetails as default };
