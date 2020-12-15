import React from 'react';
import '../../css/tweets/TwitterAccount.css';

function TwitterAccount(props) {
    return (
        <div className="TwitterAccount">
            <h3>Twitter:</h3>
            <p>{props.twitter_account}</p>
        </div>
    );
}

export default TwitterAccount;