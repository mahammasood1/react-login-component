import React from 'react';
import './App.css';

class LoginForm extends React.Component {

  render() {
    return (
      <div className="App">
        <form >
          <label for="email">Email: </label>
          <input type="email" id="email" placeholder="Enter your email" name="Email"/>
          <label for="pass">Password: </label>
          <input type="password" id="pass" placeholder="Enter your password" name="Password"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
  
}

export default LoginForm;
