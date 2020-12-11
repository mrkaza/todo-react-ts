import { RootStore } from 'consts';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import IsLoggedIn from './IsLoggedIn';
import IsLoggedOut from './IsLoggedOut';

export const Navbar = () => {
  const user = useSelector((state: RootStore) => state.auth.user);

  return (
    <nav>
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">
          Todo App
        </Link>
        {user ? <IsLoggedIn /> : <IsLoggedOut />}
      </div>
    </nav>
  );
};
