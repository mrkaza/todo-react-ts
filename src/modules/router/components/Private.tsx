import { RootStore } from 'modules/redux';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoutes: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = ({ path, exact, component: Component }) => {
  const user = useSelector((state: RootStore) => state.auth.user);

  if (user) {
    return (
      <Route path={path} exact={exact}>
        <Suspense fallback={<div>loading</div>}>
          <Component />
        </Suspense>
      </Route>
    );
  }
  return <Redirect to="/" />;
};
