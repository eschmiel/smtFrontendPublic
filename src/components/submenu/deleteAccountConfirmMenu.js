import React from 'react';
import { userAccountMessenger } from '~/services/services.js'; 

import '../../css/submenu/DeleteAccountConfirmMenu.css';
import Account from '../account.js';

class DeleteAccountConfirmMenu extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    
    async handleDelete() {
        await userAccountMessenger.deleteUserAccount();

        this.props.onLogout();
    }

    render() {
        return (
            <div className="DeleteAccountConfirmMenu">
                <h3>Are you sure you want to delete this account?</h3>
                <div className="AccountContainer">
                    <Account name={this.props.username} selected={true}/>
                </div>
                <div className="BtnContainer">
                    <div className="SubmenuBtn" onClick={this.handleDelete}>Confirm</div>
                    <div className="SubmenuBtn" id="Cancel" onClick={this.props.changeSubmenuState}>Cancel</div>

                </div>
            </div>
        );
    }
}

export default DeleteAccountConfirmMenu;