import { Button, Input } from 'components';
import { RootStore } from 'modules/redux';
import { addTodo } from 'modules/todo';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.auth.user);

  const { register, handleSubmit, errors } = useForm();
  const userId: string = user?.user.uid ?? '';

  const onSubmit = (data: { title: string; description: string }, e: any) => {
    type NewTodo = {
      title: string;
      description: string;
    };
    const todo: NewTodo = {
      title: data.title,
      description: data.description,
    };
    if (userId) {
      dispatch(addTodo(todo, userId));
    }
    e.target.reset();
  };

  return (
    <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <Input
          name="title"
          validation={register({
            required: true,
          })}
          className="col s12"
          id="title"
          type="text"
          htmlFor="title"
          label="Title"
        />
        <Input
          name="description"
          validation={register({
            required: true,
          })}
          className="col s12"
          id="description"
          type="text"
          htmlFor="description"
          label="Description"
        />
        {(errors.description || errors.title) && (
          <p className="col s12 red-text text-darken-1 error-message">
            Both fields required
          </p>
        )}

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
