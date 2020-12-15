import React from 'react';

export const Button: React.FC<{
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  name?: string;
}> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};
