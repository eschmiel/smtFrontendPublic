import React from 'react';
import { twitterAccountMessenger } from '~/services/services.js';

import '../../css/submenu/LinkedAccountsMenu.css';
import AccountList from '../accountList.js';

class LinkedAccountsMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = { authorizationLink: '' };
    }

    componentDidMount() {
        twitterAccountMessenger.linkTwitterAccount()
            .then((authorizationLink) => this.setState({ authorizationLink: authorizationLink }));
    }

    render() {
        return (
            <div className="LinkedAccountsMenu">
                <div className="AccountContainer">
                    <AccountList accounts={this.props.linkedAccounts} />
                </div>
                <a href={this.state.authorizationLink}>
                    <div className="SubmenuBtn">Link Account</div>   
                </a>
            </div>
        );
    }
}

export default LinkedAccountsMenu;