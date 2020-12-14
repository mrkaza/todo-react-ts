import { format } from 'date-fns';
import { completeTodo, deleteTodo, editTodo, TodoType } from 'modules/todo';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

interface Props {
  todo: TodoType;
}
const TodoItem: React.FC<Props> = (props) => {
  const todo: TodoType = props.todo;
  const [edit, setEdit] = useState<boolean>(false);
  const dispatch = useDispatch();
  const id: string = todo?.id ?? '';
  const desc: string = todo?.description ?? '';
  const [newDesc, setNewDesc] = useState<string>(desc);

  const deleteSelected = () => {
    dispatch(deleteTodo(id));
  };
  const todoCompleted = () => {
    dispatch(completeTodo(id));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(editTodo(newDesc, id));
    setEdit(false);
  };

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="todo-item">
          <div className="actions teal">
            <p className="title">
              <Link to={'/todo/' + todo?.id}>{todo?.title}</Link>
            </p>
            <div className="action-btn">
              {!todo?.completed && (
                <button
                  className="btn-small btn-floating green"
                  onClick={todoCompleted}
                >
                  <i className="material-icons">done</i>
                </button>
              )}
              <button
                className="btn-small btn-floating red"
                onClick={deleteSelected}
              >
                <i className="material-icons">delete</i>
              </button>
            </div>
          </div>
          {edit ? (
            <form onSubmit={handleSubmit}>
              <div className="input-field col s12">
                <input
                  value={newDesc}
                  type="text"
                  onChange={(e) => setNewDesc(e.target.value)}
                />
              </div>
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
              <button
                className="btn-small btn-floating grey"
                onClick={handleSubmit}
              >
                <i className="material-icons">done_all</i>
              </button>
            ) : (
              <button
                className="btn-small btn-floating grey"
                onClick={() => setEdit(true)}
              >
                <i className="material-icons">edit</i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
