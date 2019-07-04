import React from 'react';
import './App.css';

class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      pass: '',
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

    alert( this.state.email )
    alert( this.state.pass )
    e.preventDefault();
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    })
  }

  handlePassChange(e) {
    this.setState({
      pass: e.target.value
    })
  }



  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label for="email">Email: </label>
          <input 
            type="email" 
            value={this.state.email} 
            onChange={this.handleEmailChange}
            id="email" 
            placeholder="Enter your email" 
            name="Email"/>
        
          <label for="pass">Password: </label>
          <input 
            type="password" 
            value={this.state.pass}
            onChange={this.handlePassChange}
            id="pass" 
            placeholder="Enter your password" 
            name="Password"/>

          <input type="submit"/>
        </form>
      </div>
    );
  }
  
}

export default LoginForm;
