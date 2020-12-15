import React from 'react';
import '../css/securityWarning.css';

function SecurityWarning(props) {
    return (
        <div className="SecurityWarning">
            <h3>WARNING</h3>
            <p> Security best practices have not been implemented and the Social Media Toggle is not considered a secure system.
                We do not recommend currently putting any sensitive information into the system such as creating an account with a commonly used password
                or linking your Twitter account to the Social Media Toggle
            </p>

            <h4>This build is for demonstration purposes only</h4>
            <p>A test account can be accessed with the following credentials:</p>
            <p>Username: test</p>
            <p>Password: test</p>
            <p>The test user has access to a test Twitter account that can be found at: <a href='https://twitter.com/AccountSmt'>https://twitter.com/AccountSmt</a> </p>
        </div>
    );
}

export default SecurityWarning;