import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const onClick = () => {
    if (darkTheme) {
      setDarkTheme(false);
      document.documentElement.style.setProperty('--color-body', '0, 0%, 98%');
      document.documentElement.style.setProperty(
        '--color-light',
        '235, 21%, 11%',
      );
      document.documentElement.style.setProperty(
        '--color-background',
        '236, 33%, 92%',
      );
    } else {
      setDarkTheme(true);
      document.documentElement.style.setProperty(
        '--color-body',
        '235, 21%, 11%',
      );
      setDarkTheme(true);
      document.documentElement.style.setProperty('--color-light', '0, 0%, 98%');
      document.documentElement.style.setProperty(
        '--color-background',
        '235, 24%, 19%',
      );
    }
  };
  return (
    <button
      className="button button--text button--circle button--light"
      onClick={onClick}
    >
      {darkTheme ? (
        <FontAwesomeIcon icon={faSun} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faMoon} size="lg" />
      )}
    </button>
  );
};

export default ThemeToggle;
