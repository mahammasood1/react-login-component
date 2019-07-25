import React from 'react';
import './components/LoginForm';
import LoginForm from './components/LoginForm';
import config from './fields.json';
import './components/custom.css';
class App extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    alert(e.target.email.value);
    alert(e.target.password.value);
  }

  render() {

    return (
      <div className="App">
        <LoginForm
          hideForm={false}
          fields={config}
          title="Login"
          onSubmit={this.handleSubmit}
          hideRememberMe={false}
          hideForgotPass={false}
          buttonValidation={true}
          isValidation={true}
          disableAlert={false}
          classes={{
            container: 'container',
            title: 'title',
            input: 'input',
            rememberMeLabel: 'rmlabel',
            inputGroup: 'inputGroup'
          }}
        />
      </div>
    );
  }

}

export default App;
