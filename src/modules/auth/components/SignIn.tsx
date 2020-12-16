import { Button, Input } from 'components';
import { RootStore } from 'consts';
import { login } from 'modules/auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { Facebook } from './Facebook';

export const SignIn: React.FC = () => {
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const errorMessage: null | string = useSelector(
    (state: RootStore) => state.auth.loginError,
  );

  const { register, handleSubmit, errors } = useForm();

  // const handleSubmit = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   dispatch(login(email, password));
  //   // setEmail('');
  //   // setPassword('');
  // };

  const onSubmit = (data: any) => {
    dispatch(login(data.email, data.password));
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
        {/* <Input
          value={email}
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          htmlFor="email"
          className="col s12"
          label="Email"
        />
        <Input
          className="col s12"
          value={password}
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          htmlFor="password"
          label="Password"
        /> */}
        <input
          name="email"
          ref={register({
            required: { value: true, message: 'This field is required' },
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: 'Email is not formed correctly',
            },
          })}
        />
        {errors.email && <p className="red-text">{errors.email.message}</p>}
        <input
          type="password"
          name="password"
          ref={register({
            required: { value: true, message: 'This field is required' },
            minLength: {
              value: 8,
              message: 'Minimal lenght of password is 8 char.',
            },
          })}
        />
        {errors.password && (
          <p className="red-text">{errors.password.message}</p>
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
