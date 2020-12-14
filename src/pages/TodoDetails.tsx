import { RootStore } from 'consts';
import { format } from 'date-fns';
import { todoDetails, TodoType } from 'modules/todo';
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

  const todo: TodoType = useSelector((state: RootStore) => state.todo.todo);
  return (
    <div className="container">
      {todo ? (
        <div className="row">
          <div className="col s12 l6 offset-l3">
            <div className="card">
              <div className="todo-item">
                <p className="title teal white-text">{todo.title}</p>
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
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
