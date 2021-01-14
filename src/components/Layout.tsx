import React, { useState } from 'react';

export const Layout: React.FC = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const onClick = () => {
    if (darkTheme) {
      setDarkTheme(false);
      document.documentElement.style.setProperty('--color-body', '0, 0%, 98%');
      document.documentElement.style.setProperty(
        '--color-text',
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
      document.documentElement.style.setProperty('--color-text', '0, 0%, 98%');
      document.documentElement.style.setProperty(
        '--color-background',
        '235, 24%, 19%',
      );
    }
  };

  return (
    <section className="container">
      <div className="themeToggle f f-justify-between f-align-items-center">
        <h1>TODO</h1>
        <button
          className="button button--text button--circle button--light"
          onClick={onClick}
        >
          toggle
        </button>
      </div>
      {children}
    </section>
  );
};
