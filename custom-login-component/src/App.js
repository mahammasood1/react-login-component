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

  callAPI = (e) => {
    e.preventDefault();
    alert(e.target.email.value);
    alert(e.target.password.value);

    // fetch('http://localhost:3000/')
    //   .then((result) => {
    //     return result.json();
    //   }).then((jsonResult) => {
    //     console.log(jsonResult);
    //   })

    const data = e.target.email.value;
    var obj = {
      method: 'POST',
      headers: {},
      body: data
    };

    fetch('http://localhost:3000/', obj).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      console.log(jsonResponse);
    });



  }

  render() {
    return (
      <div className="App">
        <LoginForm
          hideForm={false}
          fields={config}
          title="Login"
          onSubmit={this.callAPI}
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
