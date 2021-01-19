import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components';
import { logout } from 'modules/auth';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TodoForm from './TodoForm';

export const TodoNav: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [profile, setProfile] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setModal(true);
  };

  const showProfile = () => {
    setProfile(true);
  };

  const hideProfile = () => {
    setProfile(false);
  };

  const signOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="todo__nav f f-justify-between f-align-items-center mb-md">
        <Button
          className="button button--outline-primary button--small button--text button--light button--round"
          onClick={showModal}
        >
          Add todo
        </Button>
        <Button
          onMouseOver={showProfile}
          className="button  button--circle button--circle--small button--outline-primary button--text button--light"
        >
          <FontAwesomeIcon icon={faUser} size="sm" />
        </Button>
        <div
          onMouseLeave={hideProfile}
          className={`todo__nav__profile ${
            profile ? 'todo__nav__profile--active' : ''
          }`}
        >
          <Button
            onClick={signOut}
            className="button button--text button--light"
          >
            Logout
          </Button>
        </div>
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
