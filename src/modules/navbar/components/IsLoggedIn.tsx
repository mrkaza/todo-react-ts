import { Button } from 'components';
import { logout } from 'modules/auth';
import React from 'react';
import { useDispatch } from 'react-redux';

const IsLoggedIn: React.FC = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logout());
  };

  return (
    <Button
      onClick={signOut}
      className="button button--text button--outline-primary button--light button--small button--round"
    >
      Logout
    </Button>
  );
};

export default IsLoggedIn;
