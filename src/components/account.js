import React from 'react';
import '../css/Account.css';


class Account extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }


    handleSelect() {
        if(this.props.onSelect) this.props.onSelect(this.props.account_id);
    }


    render() {
        let accountStatus;

        if (this.props.selected) accountStatus = "AccountSelected";
        else accountStatus = "Account";    

        return <div className={accountStatus} onClick={this.handleSelect}>{this.props.name}</div>        
    }
}


export default Account;