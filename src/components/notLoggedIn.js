import React from 'react';
import LoginMenu from './login/loginMenu.js';
import LoginForm from './login/loginForm.js';
import CreateAccountForm from './login/createAccountForm.js';

class NotLoggedIn extends React.Component {
    constructor(props) {
        super(props);

        this.handleMenuStateChange = this.handleMenuStateChange.bind(this);
        this.state = { menuState: 'LoggingIn' };
    }


    handleMenuStateChange(newState) {
        if ( newState === 'LoggingIn' || 'CreatingAccount' ) this.setState({ menuState: newState });
    }


    render() {
        return (
            <div>
                <div className="Menubar">
                    <img src="./images/smt-logo.png" alt="Social Media Toggle by Schmiel logo" className="logo" />
                    {this.state.menuState === "LoggingIn" ? <LoginMenu onMenuStateChange={this.handleMenuStateChange} /> : ''}
                </div>
             
                {
                    this.state.menuState === "LoggingIn" ? <LoginForm onLogin={this.props.onLogin} /> :
                    this.state.menuState === "CreatingAccount" ? <CreateAccountForm onMenuStateChange={this.handleMenuStateChange} onLogin={this.props.onLogin} /> : ''
                }
            </div>
        );
    }
}


export default NotLoggedIn;