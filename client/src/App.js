import React, { Component } from 'react';
import './App.css';
import Api from './services/apiFetcher'

class App extends Component {

  componentDidMount() {
    Api.login({ username: "johnson", password: "123pass"}) 
      .then((user) => {
        console.log(user)
      })
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
