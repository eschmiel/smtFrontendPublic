import React from 'react';
import '../css/FreshAccount.css';


class LinkFirstAccount extends React.Component {
    constructor(props) {
        super(props);

        this.state = { authorizationLink : '' };
    }


    componentDidMount() {
        fetch('https://streamtoggle-backend.herokuapp.com/account/linkTwitterAccount', { method: 'GET', credentials: 'include' }).then(response => response.text()).then(link => this.setState({ authorizationLink: link }));
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