import React from 'react';
import '../css/FreshAccount.css';
import NewTweet from './tweets/newTweet.js';


function FirstTweet(props) {
    return (
        <div className="PromptContainer">
            <h3>Create a tweet</h3>
            <NewTweet username={props.username} updateTweets={props.updateTweets} twitterAccounts={props.twitterAccounts} />                
        </div>
    );
}


export default FirstTweet;