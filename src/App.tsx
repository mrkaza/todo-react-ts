import { Layout, PrivateRoutes, PublicRoutes } from 'components';
import { Navbar } from 'modules/navbar';
import { Home, Login, Register, TodoDetails } from 'pages';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Layout>
          <Switch>
            <PrivateRoutes path="/" component={Home} exact />
            <PrivateRoutes path="/todo/:id" component={TodoDetails} exact />
            <PublicRoutes path="/login" component={Login} exact />
            <PublicRoutes path="/register" component={Register} exact />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;
