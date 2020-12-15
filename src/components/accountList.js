import React from 'react';
import Account from './account';


function AccountList(props) {
    const accountList = props.accounts.map((accountData) => 
        <Account key={accountData.account_id} account_id={accountData.account_id} name={accountData.screen_name} selected={accountData.selected} onSelect={props.onSelect} />
    );


    return (
        <div className="AccountContainer">
            {accountList}
        </div>
    );
}


export default AccountList;