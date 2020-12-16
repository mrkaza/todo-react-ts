import React, { InputHTMLAttributes } from 'react';

type Props = {
  htmlFor?: string;
  label?: string;
  validation?: any;
  name?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({
  htmlFor,
  label,
  className,
  validation,
  name,
  ...rest
}) => {
  return (
    <div className={`input-field ${className}`}>
      <input name={name} ref={validation} {...rest} />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  );
};
