import { Button, Input } from 'components';
import { registerUser } from 'modules/auth';
import { RootStore } from 'modules/redux';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export const SignUp: React.FC = () => {
  const dispatch = useDispatch();

  const errorMessage = useSelector((state: RootStore) => state.auth.regError);

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
  const notify = () => {
    toast(errorMessage?.message, {
      position: 'top-center',
      autoClose: false,
    });
  };
  if (errorMessage) {
    notify();
  }

  return (
    <div className="auth">
      <header>
        <h1 className="t-center auth__title">Register</h1>
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
          className="input input--large input--transparent input--medium"
          id="email"
          type="email"
          htmlFor="email"
          placeholder="Email"
        />
        {errors.email && (
          <p className="t-center t-error">{errors.email.message}</p>
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
          className="input input--large input--transparent input--medium"
          placeholder="Password"
          id="password"
          type="password"
          htmlFor="password"
        />
        {errors.password && (
          <p className="t-center text--error">{errors.password.message}</p>
        )}

        <div className="f f-justify-center">
          <Button
            className="button button--light button--text button--outline-primary button--round button--medium"
            type="submit"
            name="action"
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};
