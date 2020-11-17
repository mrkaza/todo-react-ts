import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TodoDetails from "./pages/TodoDetails";
import Error from "./pages/Error";
import { Navbar } from "./modules/navbar";

import { useSelector } from "react-redux";
import { RootStore } from "./consts/rootReducer";

function App() {
  const user = useSelector((state: RootStore) => state.auth.user);

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
