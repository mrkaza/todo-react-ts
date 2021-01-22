import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bgDesktopDark from 'assets/bg-desktop-dark.jpg';
import bgDesktopLight from 'assets/bg-desktop-light.jpg';
import bgMobileDark from 'assets/bg-mobile-dark.jpg';
import bgMobileLight from 'assets/bg-mobile-light.jpg';
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
      document.documentElement.style.setProperty(
        '--bg-desktop',
        `url(${bgDesktopLight})`,
      );
      document.documentElement.style.setProperty(
        '--bg-mobile',
        `url(${bgMobileLight})`,
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
      document.documentElement.style.setProperty(
        '--bg-desktop',
        `url('assets/bg-desktop-dark.jpg')`,
      );
      document.documentElement.style.setProperty(
        '--bg-desktop',
        `url(${bgDesktopDark})`,
      );
      document.documentElement.style.setProperty(
        '--bg-mobile',
        `url(${bgMobileDark})`,
      );
    }
  };
  return (
    <button
      className="theme-toggle button button--text button--circle button--light"
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
