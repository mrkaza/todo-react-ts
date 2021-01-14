import { RootStore } from 'modules/redux';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import IsLoggedIn from './IsLoggedIn';
import IsLoggedOut from './IsLoggedOut';
import ThemeToggle from './ThemeToggle';

export const Navbar: React.FC = () => {
  const user = useSelector((state: RootStore) => state.auth.user);

  return (
    <nav className="navbar">
      <div className="f f-justify-between f-align-items-center">
        <Link to="/my-todos" className="navbar__link navbar__title">
          TODO
        </Link>
        {user ? <IsLoggedIn /> : <IsLoggedOut />}
        <ThemeToggle />
      </div>
    </nav>
  );
};
