import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components';
import React, { useState } from 'react';

import TodoForm from './TodoForm';

export const TodoNav: React.FC = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  console.log(modal);

  return (
    <>
      <div className="todo__nav f f-justify-between f-align-items-center mb-md">
        <Button
          className="button button--outline-primary button--small button--text button--light button--round"
          onClick={showModal}
        >
          Add todo
        </Button>
        <Button className="button  button--circle button--circle--small button--outline-primary button--text button--light">
          <FontAwesomeIcon icon={faUser} size="sm" />
        </Button>
      </div>

      <div
        className={`todo-form-modal f-align-items-center f-justify-center ${
          modal ? 'todo-form-modal--active' : ''
        }`}
      >
        <TodoForm setModal={setModal} />
      </div>
    </>
  );
};
