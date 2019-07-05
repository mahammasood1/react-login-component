import React from 'react';
import './components/LoginForm';
import LoginForm from './components/LoginForm';
import config from './fields.json'
class App extends React.Component {

  render() {

    return (
      <div className="App">
        <LoginForm 
          fields={config}
        />
      </div>
    );
  }
  
}

export default App;
