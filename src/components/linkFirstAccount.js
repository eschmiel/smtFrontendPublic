import React from 'react';
import { twitterAccountMessenger } from '~/services/services.js';

import '../css/FreshAccount.css';


class LinkFirstAccount extends React.Component {
    constructor(props) {
        super(props);

        this.state = { authorizationLink : '' };
    }


    componentDidMount() {
        twitterAccountMessenger.linkTwitterAccount()
            .then((authorizationLinks) => this.setState({ authorizationLink: authorizationLinks }));
    }
    

    render() {
        return (
            <div className="PromptContainer">
                <h3>Link your Twitter Account</h3>
                <a href={this.state.authorizationLink}>
                    <div className="SubmenuBtn">Link Account</div>
                </a>
            </div>
        );
    }
}


export default LinkFirstAccount;