import React from 'react';
import { NavLink } from 'react-router-dom';

const IsLoggedOut: React.FC = () => {
  return (
    <ul id="nav-mobile" className="right">
      <li>
        <NavLink to="/">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </ul>
  );
};

export default IsLoggedOut;
