import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <Router>
      <div>
        <nav>
        <h1>App For Friend's Info.</h1>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <div>
            <Link to='/protected'>Friend's List(protectedPage)</Link>
          </div>
        </nav>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendsList}/>
          <Route path='/login' component={LoginForm}/>
          <Route component={LoginForm}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
