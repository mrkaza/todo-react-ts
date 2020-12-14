import { RootStore } from 'consts';
import { Error, Login, Register } from 'pages';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

export const PublicRoutes: React.FC = () => {
  const user = useSelector((state: RootStore) => state.auth.user);
  return (
    <div>
      {!user ? (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={Error} />
        </Switch>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};
