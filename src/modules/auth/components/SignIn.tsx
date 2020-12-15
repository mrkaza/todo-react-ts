import { Button, Input } from 'components';
import { RootStore } from 'consts';
import { login } from 'modules/auth';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Facebook } from './Facebook';

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const errorMessage: null | string = useSelector(
    (state: RootStore) => state.auth.loginError,
  );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(login(email, password));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form className="col s12" onSubmit={handleSubmit}>
        <Input
          value={email}
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          htmlFor="email"
          label="Email"
          className="col s12"
        />
        <Input
          className="col s12"
          value={password}
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          htmlFor="password"
          label="Password"
        />
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
