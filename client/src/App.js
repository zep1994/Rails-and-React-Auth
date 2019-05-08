import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import Api from './services/apiFetcher'

class App extends Component {

  state = {
    user: {}
  }

  loginUser = (userObj) => {
    Api.login(userObj) 
    .then((user) => {

      this.setState({
        user
      })
    })
  }

  componentDidMount() {
  
  }

  render() {
    return (
      <div>
        <p>{this.state.user.username}</p>
        <LoginForm onLogin={this.loginUser} />  
      </div>
    );
  }
}

export default App;
