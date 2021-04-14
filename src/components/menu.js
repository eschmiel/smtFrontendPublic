import React from 'react';
import { userAccountMessenger } from '~/services/services.js';

import Submenu from './submenu/submenu.js';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submenuState: ''
        }

        this.changeSubmenuState = this.changeSubmenuState.bind(this);
        this.logout = userAccountMessenger.logout.bind(this);
    }


    changeSubmenuState(event) {
        let newState; 
        if (event) newState = event.target.id; else newState = '';

        this.setState({ submenuState: newState });
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
                         refreshTweets={this.props.refreshTweets}
                />
            </div>
        );
    }
}

export default Menu;