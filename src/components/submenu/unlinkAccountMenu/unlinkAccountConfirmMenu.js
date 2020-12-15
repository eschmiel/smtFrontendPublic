import React from 'react';
import '../../../css/submenu/UnlinkAccountConfirmMenu.css';
import AccountList from '../../accountList.js';

//Required Props: selectedAccounts
//                onCancel

function UnlinkAccountConfirmMenu(props) {
    return (
        <div className="UnlinkAccountConfirmMenu">
            <h3>Are you sure you want to unlink this account?</h3>
            <div className="AccountContainer">
                <AccountList accounts={props.selectedAccounts} />
            </div>
            <div className="BtnContainer">
                <div className="SubmenuBtn" id='Settings' onClick={props.onConfirm}>Confirm</div>
                <div className="SubmenuBtn" id="Select" onClick={props.onCancel}>Cancel</div>
            </div>
        </div>
    );
}

export default UnlinkAccountConfirmMenu;