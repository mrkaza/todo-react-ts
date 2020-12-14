import { RootStore } from 'consts';
import { Error, Home, TodoDetails } from 'pages';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

export const PrivateRoutes: React.FC = () => {
  const user = useSelector((state: RootStore) => state.auth.user);
  return (
    <div>
      {user ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todo/:id" component={TodoDetails} />
          <Route component={Error} />
        </Switch>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};
