import { RootStore } from 'consts';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoutes: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  const user = useSelector((state: RootStore) => state.auth.user);

  return !user ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/" />
  );
};
