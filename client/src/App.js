import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import Api from './services/apiFetcher'

class App extends Component {

  state = {
    user: {}
  }

  loginUser = (userObj) => {
    console.log(userObj)
    Api.login(userObj) 
    .then((json) => {
      console.log(json)
      this.setState({
        user: json.user
      })

      localStorage.setItem('userToken', json.token)
    })
  }

  componentDidMount() {
  
  }

  render() {
    console.log(this.state.user.username)
    return (

    
      <div>
        { localStorage.getItem('userToken') ? <p>Welcome User</p> : <p>Please Log in</p>}
        <p>{this.state.user.username}</p>
        <LoginForm onLogin={this.loginUser} />  
      </div>
    );
  }
}

export default App;
