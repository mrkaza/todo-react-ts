import React, { ButtonHTMLAttributes } from 'react';

export const Button: React.FC<{
  onClick?: any;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  name?: string;
}> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      type={props.type}
      name={props.name}
    >
      {props.children}
    </button>
  );
};
