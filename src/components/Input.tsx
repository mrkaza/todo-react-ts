import React from 'react';

export const Input: React.FC<{
  className?: string;
  value?: string;
  id?: string;
  type?: string;
  onChange?: (e: any) => void;
  htmlFor?: string;
  label?: string;
  placeholder?: string;
}> = ({ ...rest }) => {
  return (
    <div className={`input-field ${rest.className}`}>
      <input {...rest} />
      <label htmlFor={rest.htmlFor}>{rest.label}</label>
    </div>
  );
};
