import { Button, Input } from 'components';
import { RootStore } from 'consts';
import { registerUser } from 'modules/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export const SignUp: React.FC = () => {
  const dispatch = useDispatch();

  const errorMessage: null | string = useSelector(
    (state: RootStore) => state.auth.regError,
  );

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: { email: string; password: string }) => {
    type NewUser = {
      email: string;
      password: string;
    };
    const newUser: NewUser = {
      email: data.email,
      password: data.password,
    };
    dispatch(registerUser(newUser));
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
          className="col s12"
          id="email"
          type="email"
          htmlFor="email"
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
              message: 'Minimal length of password is 6 char.',
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
            Register
          </Button>
        </div>
      </form>
      {errorMessage && (
        <p className=" col s12 red-text text-darken-1 error-message">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
