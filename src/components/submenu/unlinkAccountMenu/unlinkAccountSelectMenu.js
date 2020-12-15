import React from 'react';
import AccountList from '../../accountList.js';

//Required props: onSelect
//                onCancel
//                onConfirm
//                unlinkAccountMenuItems

function UnlinkAccountSelectMenu(props) {
    return (
        <div className="UnlinkAccountsMenu">
            <AccountList accounts={props.unlinkAccountMenuItems} onSelect={props.onSelect} />
            <div className="BtnContainer">
                <div className="SubmenuBtn" id="Confirm" onClick={props.onConfirm}>Unlink Account</div>
                <div className="SubmenuBtn" id="Settings" onClick={props.onCancel}>Cancel</div>
            </div>
        </div>
    );
}

export default UnlinkAccountSelectMenu;