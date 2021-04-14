import React from 'react';
import { userAccountMessenger } from '~/services/services.js';

import '../../css/login/AccountForm.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            username: '',
            password: ''
        };
    }


    handleLogin() {
        document.cookie = 'loggedIn=true';
        this.props.onLogin(true);
    }


    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }


    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }


    async handleSubmit(event) {
        event.preventDefault();
        let loginData = new FormData();

        loginData.append("username", this.state.username);
        loginData.append("password", this.state.password);
        
        let loginSuccessful = await userAccountMessenger.login(loginData);

        if(loginSuccessful) this.handleLogin();        
    }


    render() {       
        return (
            <div className="AccountFormContainer">
                <form onSubmit={this.handleSubmit} className="AccountForm">
                    <ul>
                        <li >
                            <label for="username">Username: </label>
                            <input type="text" value={this.state.value} onChange={this.handleUsernameChange} required />
                        </li>
                        <li>
                            <label for="password">Password: </label>
                            <input type="password" value={this.state.value} onChange={this.handlePasswordChange} required />
                        </li>
                        <li>
                            <button type="submit" className="ContentBtn">Login </button>
                        </li>
                    </ul>
                </form>
                <div className="RecoverPasswordBtn">Recover Password</div>
            </div>            
        );
    }
}

export default LoginForm;