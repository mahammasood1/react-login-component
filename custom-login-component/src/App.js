import React from 'react';
import './App.css';

function LoginForm() {
  return (
    <div className="App">
      <form >
        <label for="email">Email: </label>
        <input type="email" id="email" placeholder="Enter your email" name="Email"/>
        <label for="pass">Password: </label>
        <input type="password" id="pass" placeholder="Enter your password" name="Password"/>
      </form>
    </div>
  );
}

export default LoginForm;
