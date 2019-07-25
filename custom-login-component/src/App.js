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

  getData = (e) => {
    e.preventDefault();
    alert(e.target.email.value);
    alert(e.target.password.value);

    fetch(config.url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }

  postData(e) {
    e.preventDefault();
    alert(e.target.email.value);
    alert(e.target.password.value);

    let username = e.target.email.value;
    let pwd = e.target.password.value;

    console.log(username);
    console.log(pwd);

    fetch(config.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: username, password: pwd })
    }).then(
      function (response) {

        response.json().then(function (data) {

          console.log(data);

        });
      }
    )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }

  render() {
    return (
      <div className="App">
        <LoginForm
          hideForm={false}
          fields={config}
          title="Login"
          onSubmit={this.postData}
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
