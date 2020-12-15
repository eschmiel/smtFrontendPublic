import React from 'react';
import '../../css/tweets/TwitterAccountForm.css';

class TwitterAccountForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.options = props.twitterAccounts.map(account => <option value={account.account_id}> {account.screen_name} </option>);

    }

    handleChange(event) {
        this.props.handleChange(event);
    }

    render() {
        return (
            <div className="TwitterAccount">
                <h3>Twitter:</h3>
                <select id="TwitterAccount" name="twitterAccount" value={this.props.account_id} onChange={this.handleChange}>
                     {this.options}
                </select>
            </div>
        );
    }
}

export default TwitterAccountForm;