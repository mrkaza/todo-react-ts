import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <article className="todo-item">
      <div className="flex-space-between">
        <h1 className="todo-item__title">
          <Link to={'/todo/' + id}>{todo?.title}</Link>
        </h1>
        <div className="flex-space-between">
          {!todo?.completed && (
            <Button
              className="button button--circle button--success"
              onClick={todoCompleted}
            >
              <FontAwesomeIcon icon={faCheck} />
            </Button>
          )}
          <Button
            className="button button--circle button--danger"
            onClick={deleteSelected}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </div>
      {edit ? (
        <form onSubmit={handleSubmit}>
          <Input
            className="input input--medium input--secondary"
            value={newDesc}
            type="text"
            onChange={(e) => setNewDesc(e.target.value)}
          />
        </form>
      ) : (
        <p
          className={`todo-item__description ${
            todo?.completed ? 'todo-item__description--completed' : ''
          }`}
        >
          {todo?.description}
        </p>
      )}

      <div className="flex-space-between">
        <p className="todo-item__created-at">
          Created at: {format(todo?.createdAt.toDate(), 'do MMM yyyy, H:mm')}
        </p>
        {edit ? (
          <Button
            className="button button--circle button--neutral"
            onClick={editSelected}
          >
            <FontAwesomeIcon icon={faCheck} />
          </Button>
        ) : (
          <Button
            className="button button--circle button--neutral"
            onClick={() => setEdit(true)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        )}
      </div>
    </article>
  );
};

export default TodoItem;
