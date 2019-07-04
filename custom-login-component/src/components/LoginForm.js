import React  from 'react';
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
          <label for="email">{this.props.fields.email.label}</label>
          <input 
            type={this.props.fields.email.type}
            value={this.state.email} 
            onChange={this.handleEmailChange}
            id="email" 
            placeholder={this.props.fields.email.placeholder} 
            name={this.props.fields.email.name}/>
        
          <label for="pass">{this.props.fields.password.label}</label>
          <input 
            type="password" 
            value={this.state.pass}
            onChange={this.handlePassChange}
            id="pass" 
            placeholder={this.props.fields.password.placeholder}
            name={this.props.fields.password.name}/>

          <input type="submit"/>
        </form>
      </div>
    );
  }
  
}

export default LoginForm;
