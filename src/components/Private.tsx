import { RootStore } from 'consts';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoutes: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  const user = useSelector((state: RootStore) => state.auth.user);

  if (user) {
    return (
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    );
  } else {
    return <Redirect to="/login" />;
  }
};
