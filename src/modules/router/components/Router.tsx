import 'react-toastify/dist/ReactToastify.css';

import { Layout } from 'components';
import { Error } from 'pages';
import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { PrivateRoutes } from './Private';
import { PublicRoutes } from './Public';

const Home = React.lazy(() => import('pages/Home'));
const Login = React.lazy(() => import('pages/Login'));
const Register = React.lazy(() => import('pages/Register'));
const TodoDetails = React.lazy(() => import('pages/TodoDetails'));

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <link rel="canonical" href="http://localhost:3000/" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Todo application for managing your todo list"
        />
        <meta
          property="og:description"
          content="Todo application for managins our todo list"
        />
        <meta property="og:title" content="Todo App" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:site_name" content="Todo App" />
      </Helmet>
      <Layout>
        <ToastContainer />
        <Switch>
          <PrivateRoutes path="/my-todos" component={Home} exact />
          <PrivateRoutes path="/todo/:id" component={TodoDetails} exact />
          <PublicRoutes path="/" component={Login} exact />
          <PublicRoutes path="/register" component={Register} exact />
          <Route component={Error}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
