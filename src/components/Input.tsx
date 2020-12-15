import React from 'react';

export const Input: React.FC<{
  class?: string;
  value?: string;
  id?: string;
  type?: string;
  onChange?: (e: any) => void;
  htmlFor?: string;
  label?: string;
  placeholder?: string;
}> = (props) => {
  return (
    <div className={`input-field ${props.class}`}>
      <input
        value={props.value}
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      <label htmlFor={props.htmlFor}>{props.label}</label>
    </div>
  );
};
