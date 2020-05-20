import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import styled from 'styled-components'


const MainContainer = styled.div`
  margin: 10rem 25rem;
  width: auto;
  text-align: center;
  border: 2px solid black;
  height: 1500px;
  background: lightgray;
`
const Header = styled.h1`
color: blueviolet;
background: lightcyan
`
const Navigator = styled.nav`
width: 100%;
display: flex;
justify-content: flex-end;
background: lightcoral;
text-decoration: none;
/* justify-content: space-around; */
`


function App() {
  return (
    <Router>
      <MainContainer>
      <Header>App For Friend's Info.</Header>
        <Navigator>
         <div style = {{ margin: '1rem'}}>
            <Link to='/login'>Login</Link>
          </div>
          <div style = {{ margin: '1rem'}}>
            <Link to='/protected'>Friend's List(protectedPage)</Link>
          </div>
        </Navigator>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendsList}/>
          <Route path='/login' component={LoginForm}/>
          <Route component={LoginForm}/>
        </Switch>
      </MainContainer>
    </Router>
  );
}

export default App;
