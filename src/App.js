import React from 'react';
import Utilities from './utilities.js';

import LoggedIn from '~/components/loggedIn.js'
import NotLoggedIn from '~/components/notLoggedIn.js'
import SecurityWarning from '~/components/securityWarning.js';

import '~/css/MainCSS.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.changeLoginStatus = this.changeLoginStatus.bind(this);
        this.state = {
            loggedIn: false
        };
    }

    changeLoginStatus(status) {
        this.setState({ loggedIn: status });
    }

    render() {
        return (
            <div>
                { this.state.loggedIn || Utilities.doesCookieExist('loggedIn') ? <LoggedIn /> : <NotLoggedIn onLogin={this.changeLoginStatus} /> }
                <SecurityWarning />
            </div>    
        );
    }
}

export default App;