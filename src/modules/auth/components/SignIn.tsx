import { Button, Input } from 'components';
import { useSignIn } from 'modules/auth';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Facebook } from './Facebook';

export const SignIn: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const [, { onSubmit }] = useSignIn();

  return (
    <div>
      <header>
        <h1 className="text-center">Login</h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          validation={register({
            required: { value: true, message: 'This field is required' },
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,10}$/,
              message: 'Email is not formed correctly',
            },
          })}
          id="email"
          type="email"
          htmlFor="email"
          className="input input--secondary input--large"
          labelClass="label"
          label="Email"
        />
        {errors.email && (
          <p className="text-center text--error">{errors.email.message}</p>
        )}
        <Input
          name="password"
          validation={register({
            required: { value: true, message: 'This field is required' },
            minLength: {
              value: 6,
              message: 'Minimal lenght of password is 6 char.',
            },
          })}
          className="input input--secondary input--large"
          labelClass="label"
          id="password"
          type="password"
          htmlFor="password"
          label="Password"
        />
        {errors.password && (
          <p className="text-center text--error">{errors.password.message}</p>
        )}

        <div className="flex-center">
          <Button
            className="button button--medium button--secondary"
            type="submit"
            name="action"
          >
            Login
          </Button>
        </div>
      </form>
      <p className="text-center">or</p>
      <div className="flex-center">
        <Facebook />
      </div>
    </div>
  );
};
