import React from 'react';
import { Link } from 'react-router-dom';

import ThemeToggle from './ThemeToggle';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar f f-justify-between f-align-items-center">
      <Link to="/my-todos" className="navbar__link navbar__title">
        TODO
      </Link>
      <ThemeToggle />
    </nav>
  );
};
