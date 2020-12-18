import { Button, Input } from 'components';
import { format } from 'date-fns';
import { completeTodo, deleteTodo, editTodo, TodoType } from 'modules/todo';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

interface Props {
  todo: TodoType;
}
const TodoItem: React.FC<Props> = (props) => {
  const todo = props.todo.todo;
  const [edit, setEdit] = useState<boolean>(false);
  const dispatch = useDispatch();
  const id = props.todo.id;
  const desc = todo?.description ?? '';
  const [newDesc, setNewDesc] = useState<string>(desc);

  const deleteSelected = () => {
    dispatch(deleteTodo(id));
  };
  const todoCompleted = () => {
    dispatch(completeTodo(id));
  };
  const editSelected = () => {
    dispatch(editTodo(newDesc, id));
    setEdit(false);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    editSelected();
  };

  return (
    <article className="row">
      <div className="col s12 m6 offset-m3">
        <div className="todo-item">
          <div className="actions teal">
            <h1 className="title">
              <Link to={'/todo/' + id}>{todo?.title}</Link>
            </h1>
            <div className="action-btn">
              {!todo?.completed && (
                <Button
                  className="btn-small btn-floating green"
                  onClick={todoCompleted}
                >
                  <i className="material-icons">done</i>
                </Button>
              )}
              <Button
                className="btn-small btn-floating red"
                onClick={deleteSelected}
              >
                <i className="material-icons">delete</i>
              </Button>
            </div>
          </div>
          {edit ? (
            <form onSubmit={handleSubmit}>
              <Input
                className="col s12"
                value={newDesc}
                type="text"
                onChange={(e) => setNewDesc(e.target.value)}
              />
            </form>
          ) : (
            <p className={`desc ${todo?.completed ? 'completed' : ''}`}>
              {todo?.description}
            </p>
          )}

          <div className="edit">
            <p className="created">
              Created at:{' '}
              {format(todo?.createdAt.toDate(), 'do MMM yyyy, H:mm')}
            </p>
            {edit ? (
              <Button
                className="btn-small btn-floating grey"
                onClick={editSelected}
              >
                <i className="material-icons">done_all</i>
              </Button>
            ) : (
              <Button
                className="btn-small btn-floating grey"
                onClick={() => setEdit(true)}
              >
                <i className="material-icons">edit</i>
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default TodoItem;
