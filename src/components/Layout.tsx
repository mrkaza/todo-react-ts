import { Navbar } from 'modules/navbar';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main className="container">
        <Navbar />
        {children}
      </main>
    </>
  );
};
