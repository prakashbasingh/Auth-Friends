import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from 'styled-components'

const Form = styled.form`
margin: 2rem;
background: orange;
`
const Input = styled.input`
margin: 2rem;
`
const Button = styled.button`
margin: 1rem;
height: 30px;
width: 70px;
background: lime;
`

class LoginForm extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // make a POST request to the login endpoint
    // _if_ the creds match what's in the database, the server will return a JSON web token
    // set the token to localStorage (sessions)
    // navigate the user to the "/protected" route
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then(res => {
        console.log(res.data, 'wWWWWWWWWWWWWhat we have here???!!!!????')
        // res.data.payload
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.login}>
          <Input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <Button>Log in</Button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
