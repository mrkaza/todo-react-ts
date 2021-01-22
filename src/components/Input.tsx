import React, { InputHTMLAttributes } from 'react';

type Props = {
  htmlFor?: string;
  label?: string;
  labelClass?: string;
  validation?:
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;
  name?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({
  htmlFor,
  label,
  labelClass,
  validation,
  name,
  ...rest
}) => {
  return (
    <div className="input-wrapper">
      <label className={labelClass} htmlFor={htmlFor}>
        {label}
      </label>
      <input name={name} ref={validation} {...rest} />
    </div>
  );
};
