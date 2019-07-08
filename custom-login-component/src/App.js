import React from 'react';
import './components/LoginForm';
import LoginForm from './components/LoginForm';
import config from './fields.json';
import './components/custom.css';
class App extends React.Component {

  render() {

    return (
      <div className="App">
        <LoginForm 
          hideForm={false}
          fields={config}
          title="Login"
          hideRememberMe={false}
          hideForgotPass={false}         
          classes={{
            container: 'container',
            title: 'title',
            input: 'input',
            rememberMeLabel: 'rmlabel'
          }}
        />
      </div>
    );
  }
  
}

export default App;
