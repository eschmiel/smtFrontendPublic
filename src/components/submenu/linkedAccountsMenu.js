import React from 'react';
import '../../css/submenu/LinkedAccountsMenu.css';
import AccountList from '../accountList.js';

class LinkedAccountsMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = { authorizationLink: '' };
    }

    componentDidMount() {
        fetch('https://streamtoggle-backend.herokuapp.com/account/linkTwitterAccount', {method: 'GET', credentials: 'include'}).then(response => response.text()).then(link => this.setState({ authorizationLink: link }));
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