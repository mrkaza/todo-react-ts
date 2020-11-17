import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../index";
import { Facebook } from "../index";
import { RootStore } from "../../../consts";

export const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const errorMessage = useSelector((state: RootStore) => state.auth.loginError);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="input-field col s12">
            <input
              value={email}
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s12">
            <input
              value={password}
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="facebook col s12">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Login
            </button>
          </div>
        </form>
        {errorMessage ? (
          <p className=" col s12 red-text text-darken-1 error-message">
            {errorMessage && errorMessage.message}
          </p>
        ) : null}
      </div>
      <p className="or">or</p>
      <div className="row">
        <div className="col s12 facebook">
          <Facebook />
        </div>
      </div>
    </div>
  );
};
