import { Layout } from 'components';
import { Navbar } from 'modules/navbar';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { PrivateRoutes } from './Private';
import { PublicRoutes } from './Public';

const Home = React.lazy(() => import('pages/Home'));
const Login = React.lazy(() => import('pages/Login'));
const Register = React.lazy(() => import('pages/Register'));
const TodoDetails = React.lazy(() => import('pages/TodoDetails'));

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Switch>
          <PrivateRoutes path="/my-todos" component={Home} exact />
          <PrivateRoutes path="/todo/:id" component={TodoDetails} exact />
          <PublicRoutes path="/" component={Login} exact />
          <PublicRoutes path="/register" component={Register} exact />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
