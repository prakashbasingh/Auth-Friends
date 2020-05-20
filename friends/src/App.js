import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <link to='/login'>Login</link>
          </li>
          <li>
            <Link to='/protected'>Friend's List(protectedPage)</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendsList}/>
          <Route path='/login' component={Login}/>
          <Route component={login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
