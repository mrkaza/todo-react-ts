import React, { InputHTMLAttributes } from 'react';

type Props = {
  htmlFor?: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({
  htmlFor,
  label,
  className,
  ...rest
}) => {
  return (
    <div className={`input-field ${className}`}>
      <input {...rest} />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  );
};
