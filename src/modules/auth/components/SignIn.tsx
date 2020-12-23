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
        <h1>Login</h1>
      </header>
      <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
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
          className="col s12"
          label="Email"
        />
        {errors.email && (
          <p className="col s12 red-text text-darken-1 error-message">
            {errors.email.message}
          </p>
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
          className="col s12"
          id="password"
          type="password"
          htmlFor="password"
          label="Password"
        />
        {errors.password && (
          <p className="col s12 red-text text-darken-1 error-message">
            {errors.password.message}
          </p>
        )}

        <div className="facebook col s12">
          <Button
            className="button button--medium button--secondary"
            type="submit"
            name="action"
          >
            Login
          </Button>
        </div>
      </form>
      <p className="or">or</p>
      <div className="row">
        <div className="col s12 facebook">
          <Facebook />
        </div>
      </div>
    </div>
  );
};
