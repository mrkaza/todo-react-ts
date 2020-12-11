import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Home, Login, Register, TodoDetails, Error } from "pages";
import { Navbar } from "modules/navbar";
import { useSelector } from "react-redux";
import { RootStore } from "consts";
import { UserType } from "modules/auth";

function App() {
  const user: UserType = useSelector((state: RootStore) => state.auth.user);

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
