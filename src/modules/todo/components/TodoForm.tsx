import { RootStore } from 'consts';
import { addTodo } from 'modules/todo';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.auth.user);

  const userId: string = user?.user.uid ?? '';

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    type NewTodo = {
      title: string;
      description: string;
    };
    const todo: NewTodo = {
      title: title,
      description: description,
    };
    if (userId) {
      dispatch(addTodo(todo, userId));
    }
    setTitle('');
    setDescription('');
  };

  return (
    <form className="col s12" onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-field col s12">
          <input
            value={title}
            id="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="title">Title</label>
        </div>
        <div className="input-field col s12">
          <input
            value={description}
            id="description"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="description">Description</label>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
