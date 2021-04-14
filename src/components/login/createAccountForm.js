import React from 'react';
import { userAccountMessenger } from '~/services/services.js';

import '../../css/login/AccountForm.css';

class CreateAccountForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMenuStateChange = this.handleMenuStateChange.bind(this);
    }


    handleFormChange(event) {
        switch (event.target.name) {
            case 'username': this.setState({ username: event.target.value }); break;
            case 'password': this.setState({ password: event.target.value }); break;
            default: console.log("Attemped to set state on something that is not a create account form field"); break;
        }
    }


    async handleSubmit(event) {
        event.preventDefault();

        let newUserData = new FormData();

        newUserData.append('username', this.state.username);
        newUserData.append('password', this.state.password);

        let loginSuccessful = await userAccountMessenger.createAccount(newUserData);

        if(loginSuccessful) this.props.onLogin(true);
    }


    handleMenuStateChange() {
        this.props.onMenuStateChange('LoggingIn');
    }


    render() {
        return (
            <div className="CreateAccountContent">
                
                <div className="AccountFormContainer">
                    <h2>Create Account</h2>
                    <form className="AccountForm" onSubmit={this.handleSubmit} >
                        <ul>
                            <li>
                                <label for="username">Username: </label>
                                <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleFormChange} required />
                            </li>
                            <li>
                                <label for="password">Password: </label>
                                <input type="text" id="password" name="password" value={this.state.password} onChange={this.handleFormChange} required />
                            </li>
                            <li className="CreateAccountFormBtns">
                                <button type="submit" className="ContentBtn">Create Account</button>
                                <button type="button" className="ContentBtn" onClick={this.handleMenuStateChange}>Cancel</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateAccountForm;