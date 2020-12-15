import { RootStore } from 'consts';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoutes: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  const user = useSelector((state: RootStore) => state.auth.user);

  if (user) {
    return <Redirect to="/my-todos" />;
  }
  return (
    <Route path={props.path} exact={props.exact}>
      <Suspense fallback={<div>loading</div>}>
        <props.component />
      </Suspense>
    </Route>
  );
};
