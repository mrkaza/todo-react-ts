import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TodoDetails from './pages/TodoDetails';
import Error from './pages/Error'
import Navbar from './modules/navbar/index'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/todo/:id" component={TodoDetails} />
        <Route component={Error} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
