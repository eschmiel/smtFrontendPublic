import React from 'react';
import NotLoggedIn from './components/notLoggedIn.js';
import LoggedIn from './components/loggedIn';
import './css/MainCSS.css';
import SecurityWarning from './components/securityWarning.js';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.setUsername = this.setUsername.bind(this);

        this.state = {
            username: document.cookie.split('=')[1]        
        };
    }

    setUsername(newUsername) {
        this.setState({ username: newUsername });

        document.cookie = "username=" + newUsername;
    }

    render() {
        return (
            <div>
                {this.state.username ? <LoggedIn username={this.state.username} onLogout={this.setUsername} /> : <NotLoggedIn onLogin={this.setUsername} />}
                <SecurityWarning />
            </div>    
        );
    }
}


export default App;