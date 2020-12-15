import React from 'react';
import '../../../css/submenu/UnlinkAccountsMenu.css';
import UnlinkAccountConfirmMenu from './unlinkAccountConfirmMenu.js';
import UnlinkAccountSelectMenu from './unlinkAccountSelectMenu.js';

class UnlinkAccountsMenu extends React.Component {
    constructor(props) {
        super(props);

        let unlinkAccountMenuItemsHelper = props.linkedAccounts.map((twitterAccount) => { return { account_id: twitterAccount.account_id, screen_name: twitterAccount.screen_name, selected: false } })

        this.state = {
            menuState: 'Select',
            unlinkAccountMenuItems: unlinkAccountMenuItemsHelper
        };

        this.changeMenuState = this.changeMenuState.bind(this);
        this.handleSelectMenuConfirm = this.handleSelectMenuConfirm.bind(this);
        this.select = this.select.bind(this);
        this.getSelectedAccounts = this.getSelectedAccounts.bind(this);
        this.unlinkAccount = this.unlinkAccount.bind(this);
    }


    changeMenuState(event) {
        this.setState({ menuState: event.target.id });
    }


    handleSelectMenuConfirm(event) {
        if (this.getSelectedAccounts().length) this.changeMenuState(event);
    }


    select(account_id) {
        let indexOfSelected = this.state.unlinkAccountMenuItems.findIndex((account) => account.account_id === account_id);

        let unlinkAccountMenuItemsEdits = this.state.unlinkAccountMenuItems.map((account, index) => {
            if (index === indexOfSelected) { account.selected = !account.selected; }
            return account;
        });

        this.setState({ unlinkAccountMenuItems: unlinkAccountMenuItemsEdits });
    }


    getSelectedAccounts() {
        let selectedAccounts = this.state.unlinkAccountMenuItems.filter((account) => account.selected);

        return selectedAccounts;
    }


    async unlinkAccount() {
        const requestUrl = 'https://streamtoggle-backend.herokuapp.com/account/unlinkTwitterAccount';
        let requestData = new FormData();
        let selectedAccounts = this.getSelectedAccounts();

        selectedAccounts.forEach(account => requestData.append('account_id[]', account.account_id));

        let unlinkRequest = new Request(requestUrl,
            {
                method: 'POST',
                credentials: 'include',
                body: requestData
            });

        await fetch(unlinkRequest);

        this.props.refreshLinkedAccounts();
        this.props.refreshTweets();       
        this.props.changeSubmenuState();
    }


    render() {
        return (
            <div>
                {this.state.menuState === 'Select' ? <UnlinkAccountSelectMenu unlinkAccountMenuItems={this.state.unlinkAccountMenuItems}
                    onSelect={this.select} onConfirm={this.handleSelectMenuConfirm} onCancel={this.props.changeSubmenuState} />
                    : this.state.menuState === 'Confirm' ? <UnlinkAccountConfirmMenu selectedAccounts={this.getSelectedAccounts()} onCancel={this.changeMenuState} onConfirm={this.unlinkAccount}/> 
                :''}
            </div>
        );
    }
}


export default UnlinkAccountsMenu;