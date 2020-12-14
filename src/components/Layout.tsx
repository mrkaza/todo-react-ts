import React from 'react';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <div className="row">{children}</div>
    </div>
  );
};
