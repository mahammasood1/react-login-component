import React from 'react';
import './components/LoginForm';
import LoginForm from './components/LoginForm';
import config from './fields.json';
import './components/custom.css';
class App extends React.Component {

  render() {

    // const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // const passwordRegex = /^[a-zA-Z0-9_@!#()]{8,}/;	

    return (
      <div className="App">
        <LoginForm 
          hideForm={false}
          fields={config}
          title="Login"
          hideRememberMe={false}
          hideForgotPass={false} 
          buttonValidation={true} 
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
