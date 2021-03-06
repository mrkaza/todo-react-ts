import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input } from 'components';
import { RootStore } from 'modules/redux';
import { addTodo } from 'modules/todo';
import React from 'react';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const TodoForm: React.FC<{ setModal: Dispatch<SetStateAction<boolean>> }> = ({
  setModal,
}) => {
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
    setModal(false);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <form
      className="content-wrapper todo__form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="t-center mt-sm mb-sm">Add todo</h3>
      <Input
        name="title"
        validation={register({
          required: true,
        })}
        className="input input--transparent input--medium"
        labelClass="label"
        id="title"
        type="text"
        htmlFor="title"
        placeholder="Todo title"
      />
      <Input
        name="description"
        validation={register({
          required: true,
        })}
        className="input input--transparent input--medium"
        labelClass="label"
        id="description"
        type="text"
        htmlFor="description"
        placeholder="Todo description"
      />
      {(errors.description || errors.title) && (
        <p className="t-center t-error">Both fields required</p>
      )}
      <div className="f f-justify-center mb-sm mt-md">
        <Button
          className="button button--medium button--primary button--round"
          type="submit"
          name="action"
        >
          Add Todo
        </Button>
      </div>
      <Button
        className="todo-form-modal__close button button--circle button--text button--light"
        onClick={hideModal}
      >
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </Button>
    </form>
  );
};

export default TodoForm;
