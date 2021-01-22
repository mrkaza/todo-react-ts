import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input } from 'components';
import { format } from 'date-fns';
import { completeTodo, deleteTodo, editTodo, TodoType } from 'modules/todo';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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

  const [details, setDetails] = useState<boolean>(false);

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

  const showDetails = () => {
    setDetails(!details);
  };

  return (
    <article className="todo-item">
      <div className="f f-justify-between f-align-items-center">
        <Button
          className={`button button--circle button--circle--small button--text button--light button--outline ${
            todo?.completed ? 'button--primary' : ''
          }`}
          onClick={todoCompleted}
        >
          {todo.completed ? <FontAwesomeIcon icon={faCheck} size="sm" /> : ''}
        </Button>
        <p
          onClick={showDetails}
          className={`todo-item__title ${
            todo?.completed ? 'todo-item__title--completed' : ''
          }`}
        >
          {todo.title}
        </p>
        <Button
          className="button button--circle button--circle--small button--danger button--text"
          onClick={deleteSelected}
        >
          <FontAwesomeIcon icon={faTrash} size="sm" />
        </Button>
      </div>

      <div
        className={`todo-item__details ${
          details ? 'todo-item__details--active' : ''
        }`}
      >
        {edit ? (
          <form
            onSubmit={handleSubmit}
            className="f f-align-items-center f-justify-between"
          >
            <Input
              className="input input--medium input--transparent"
              value={newDesc}
              type="text"
              onChange={(e) => setNewDesc(e.target.value)}
            />
            <Button
              className="button button--circle button--circle--small button--text button--light"
              onClick={editSelected}
            >
              <FontAwesomeIcon icon={faCheck} size="lg" />
            </Button>
          </form>
        ) : (
          <div className="f f-justify-between f-align-items-center">
            <p className="todo-item__description">{todo?.description}</p>
            <Button
              className="button button--circle button--circle-small button--text button--outline button--light"
              onClick={() => setEdit(true)}
            >
              <FontAwesomeIcon icon={faEdit} />
            </Button>
          </div>
        )}
        <div>
          <p className="todo-item__created-at t-center">
            Created at: {format(todo?.createdAt.toDate(), 'do MMM yyyy, H:mm')}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TodoItem;
