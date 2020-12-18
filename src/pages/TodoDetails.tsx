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
  console.log(todo);
  return (
    <div>
      {todo ? (
        <div className="col s12 l6 offset-l3">
          <header>
            <h1>Todo: {todo.title}</h1>
          </header>
          <article className="card">
            <div className="todo-item">
              <h1 className="title teal white-text">{todo.title}</h1>
              <p className="desc">{todo.description}</p>
              <div className="edit">
                <p className="created">
                  Created at:
                  {format(todo.createdAt.toDate(), 'do MMM yyyy, H:mm')}
                </p>
                {todo.completed ? (
                  <p className="created">Completed: true</p>
                ) : (
                  <p className="created">Completed: false</p>
                )}
              </div>
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
