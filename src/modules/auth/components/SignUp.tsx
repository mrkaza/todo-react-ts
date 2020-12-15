import { Button, Input } from 'components';
import { RootStore } from 'consts';
import { register } from 'modules/auth';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const errorMessage: null | string = useSelector(
    (state: RootStore) => state.auth.regError,
  );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    type NewUser = {
      email: string;
      password: string;
    };
    const newUser: NewUser = {
      email: email,
      password: password,
    };
    dispatch(register(newUser));
  };

  return (
    <div>
      <form className="col s12" onSubmit={handleSubmit}>
        <Input
          className="col s12"
          value={email}
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          htmlFor="email"
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
        />
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
