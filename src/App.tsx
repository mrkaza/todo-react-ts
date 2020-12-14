import { RootStore } from 'consts';
import { UserType } from 'modules/auth';
import { Navbar } from 'modules/navbar';
import { Error, Home, Login, Register, TodoDetails } from 'pages';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  const user: null | UserType = useSelector(
    (state: RootStore) => state.auth.user,
  );

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            {!user ? <Redirect to="/login" /> : <Home />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/todo/:id">
            {!user ? <Redirect to="/login" /> : <TodoDetails />}
          </Route>
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
