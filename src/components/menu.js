import React from 'react';
import Submenu from './submenu/submenu.js';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submenuState: ''
        }

        this.changeSubmenuState = this.changeSubmenuState.bind(this);
        this.logout = this.logout.bind(this);
    }


    changeSubmenuState(event) {
        let newState; 
        if (event) newState = event.target.id; else newState = '';

        this.setState({ submenuState: newState });
    }


    logout() {
        fetch('https://streamtoggle-backend.herokuapp.com/logout', { method: 'POST', credentials: 'include' });

        let expirationDate = new Date();

        this.props.onLogout('');

        document.cookie = "username=; domain=http://www.studioschmiel.com; expires=" + expirationDate.toUTCString(); 
        document.cookie = "connect.sid=; domain=http://www.studioschmiel.com; expires=" + expirationDate.toUTCString(); 
    }


    render() {        
        return (
            <div className="Menu">
                <div className="MenuBtn" onClick={this.logout}>Logout</div>
                <div className="MenuBtn" id="Settings" onClick={this.changeSubmenuState}>Settings</div>
                <div className="MenuBtn" id="Linked Accounts" onClick={this.changeSubmenuState}>Linked Accounts</div>
                <Submenu currentState={this.state.submenuState}
                         changeSubmenuState={this.changeSubmenuState}
                         onLogout={this.logout}
                         username={this.props.username}
                         twitter_accounts={this.props.twitter_accounts}
                         refreshLinkedAccounts={this.props.refreshLinkedAccounts}
                         refreshTweets={this.props.refreshTweets} />
            </div>
        );
    }
}

export default Menu;