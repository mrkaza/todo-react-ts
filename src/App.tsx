import { PrivateRoutes, PublicRoutes } from 'components';
import { Navbar } from 'modules/navbar';
import { Home, Login, Register, TodoDetails } from 'pages';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <PrivateRoutes path="/" component={Home} exact />
          <PrivateRoutes path="/todo/:id" component={TodoDetails} exact />
          <PublicRoutes path="/login" component={Login} exact />
          <PublicRoutes path="/register" component={Register} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
