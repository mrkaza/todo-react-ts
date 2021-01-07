import { RootStore } from 'modules/redux';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import IsLoggedIn from './IsLoggedIn';
import IsLoggedOut from './IsLoggedOut';

export const Navbar: React.FC = () => {
  const user = useSelector((state: RootStore) => state.auth.user);

  return (
    <nav className="navbar">
      <div className="navbar__wrapper container">
        <Link to="/my-todos" className="navbar__link">
          Todo App
        </Link>
        {user ? <IsLoggedIn /> : <IsLoggedOut />}
      </div>
    </nav>
  );
};
