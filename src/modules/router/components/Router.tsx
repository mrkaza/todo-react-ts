import { Layout } from 'components';
import { Navbar } from 'modules/navbar';
import { Home, Login, Register, TodoDetails } from 'pages';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { PrivateRoutes } from './Private';
import { PublicRoutes } from './Public';

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
