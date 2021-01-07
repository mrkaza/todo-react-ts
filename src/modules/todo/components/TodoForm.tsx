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

  const userId = user?.user?.uid;

  const onSubmit = (
    data: { title: string; description: string },
    e?: React.BaseSyntheticEvent,
  ) => {
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
    e?.target.reset();
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="title"
        validation={register({
          required: true,
        })}
        className="input input--secondary input--large"
        labelClass="label"
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
        className="input input--secondary input--large"
        labelClass="label"
        id="description"
        type="text"
        htmlFor="description"
        label="Description"
      />
      {(errors.description || errors.title) && (
        <p className="t-center t-error">Both fields required</p>
      )}
      <div className="f f-justify-center">
        <Button
          className="button button--medium button--primary"
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
