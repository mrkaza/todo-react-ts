import { Button, Input } from 'components';
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
        <Input
          className="col s12"
          value={title}
          id="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          htmlFor="title"
          label="Title"
        />
        <Input
          className="col s12"
          value={description}
          id="description"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          htmlFor="description"
          label="Description"
        />
        <Button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Add Todo
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
