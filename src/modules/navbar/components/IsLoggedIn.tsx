import { Button } from 'components';
import { logout } from 'modules/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const IsLoggedIn: React.FC = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logout());
  };

  return (
    <ul className="navbar__menu">
      <li>
        <NavLink className="navbar__link" to="/my-todos">
          Home
        </NavLink>
      </li>
      <li className="navbar__link">
        <Button onClick={signOut} className="button button--link">
          Logout
        </Button>
      </li>
    </ul>
  );
};

export default IsLoggedIn;
