import React from 'react';

export const Layout: React.FC = ({ children }) => {
  return (
    <section className="container">
      <div className="row">{children}</div>
    </section>
  );
};
