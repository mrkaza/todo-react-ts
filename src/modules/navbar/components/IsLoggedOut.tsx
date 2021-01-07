import React from 'react';
import { NavLink } from 'react-router-dom';

const IsLoggedOut: React.FC = () => {
  return (
    <ul className="navbar__menu">
      <li>
        <NavLink className="navbar__link" to="/">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className="navbar__link" to="/register">
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default IsLoggedOut;
