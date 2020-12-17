import { Button, Input } from 'components';
import { login } from 'modules/auth';
import { RootStore } from 'modules/redux';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { Facebook } from './Facebook';

export const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  const errorMessage: null | string = useSelector(
    (state: RootStore) => state.auth.loginError,
  );

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: { email: string; password: string }) => {
    dispatch(login(data.email, data.password));
    console.log(data);
  };

  return (
    <div>
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
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Login
          </Button>
        </div>
      </form>
      {errorMessage && (
        <p className=" col s12 red-text text-darken-1 error-message">
          {errorMessage}
        </p>
      )}

      <p className="or">or</p>
      <div className="row">
        <div className="col s12 facebook">
          <Facebook />
        </div>
      </div>
    </div>
  );
};
