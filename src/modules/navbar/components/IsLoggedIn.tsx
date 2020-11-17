import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../auth/index";

const IsLoggedIn = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logout());
  };

  return (
    <ul id="nav-mobile" className="right">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <button onClick={signOut}>Logout</button>
      </li>
    </ul>
  );
};

export default IsLoggedIn;
