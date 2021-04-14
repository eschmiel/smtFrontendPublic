import React from 'react';
import '../../css/submenu/Submenu.css';
import SettingsMenu from './settingsMenu.js'
import LinkedAccountsMenu from './linkedAccountsMenu.js'
import UnlinkAccountMenu from './unlinkAccountMenu/unlinkAccountMenu';
import DeleteAccountConfirmMenu from './deleteAccountConfirmMenu.js';


class Submenu extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {};

        this.manageSubmenuState = this.manageSubmenuState.bind(this);
    }


    manageSubmenuState() {
        switch (this.props.currentState) {
            case 'Settings': return <SettingsMenu changeSubmenuState={this.props.changeSubmenuState} username={this.props.username}/>
            case "Linked Accounts": return <LinkedAccountsMenu changeSubmenuState={this.props.changeSubmenuState} linkedAccounts={this.props.twitter_accounts} /> 
            case "Unlink Account": return <UnlinkAccountMenu changeSubmenuState={this.props.changeSubmenuState}
                                                             linkedAccounts={this.props.twitter_accounts}
                                                             refreshLinkedAccounts={this.props.refreshLinkedAccounts}
                                                             refreshTweets={this.props.refreshTweets}
                                                             />
            case "Delete User": return <DeleteAccountConfirmMenu changeSubmenuState={this.props.changeSubmenuState} username={this.props.username} onLogout={this.props.onLogout}/>
            default: console.log('Submenu state changed to a not recognized state'); break;
        }
    }


    render() {
        return (           
            <div className="Submenu">
                {this.manageSubmenuState()}                
            </div>         
        );
    }
}


export default Submenu;