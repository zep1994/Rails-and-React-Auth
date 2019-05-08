import React from 'react';

class LoginForm extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleUserInputChange = (event) => {
        this.setState({
            username: event.target.value
        })
    } 
    
    handlePassInputChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const userObj = { username: this.state.username, password: this.state.password }
        this.props.onLogin(userObj)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleUserInputChange} value={this.state.username} />
                <input type="password" onChange={this.handlePassInputChange} value={this.state.password} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default LoginForm