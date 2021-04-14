import React from 'react';
import { userAccountMessenger } from '~/services/services.js';
import { twitterAccountMessenger } from '~/services/services.js';
import { tweetMessenger } from '~/services/services.js';

import LinkFirstAccount from './linkFirstAccount.js';
import FirstTweet from './firstTweet.js';
import Menu from './menu.js';
import Tweet from './tweets/tweet.js';
import NewTweet from '~./components/tweets/newTweet';

const clone = require('rfdc')();

class LoggedIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
            twitterAccounts: [],
            username: ''
        };

        this.getLinkedAccounts = twitterAccountMessenger.getLinkedAccounts.bind(this);
        this.getTweets = tweetMessenger.getTweets.bind(this);
        this.getUsername = userAccountMessenger.getUsername.bind(this);

        this.refreshTweet = this.refreshTweet.bind(this);
        this.buildTweetComponents = this.buildTweetComponents.bind(this);        
    }

 
    componentDidMount() {
        this.getTweets();
        this.getLinkedAccounts();  
        this.getUsername();
    }


    render() {
        return (
            <div>
                <div className="Menubar">
                    <img src="./images/smt-logo.png" alt="Social Media Toggle by Schmiel logo" className="logo" />
                    <Menu twitter_accounts={this.state.twitterAccounts} refreshLinkedAccounts={this.getLinkedAccounts} refreshTweets={this.getTweets} username={this.state.username}/>
                </div>                
                {
                    this.state.twitterAccounts.length === 0 ? <LinkFirstAccount /> :
                    this.state.tweets.length === 0 ? <FirstTweet username={this.state.username} updateTweets={this.getTweets} twitterAccounts={this.state.twitterAccounts}/> :
                    <div id="TweetsContainer"> 
                        {this.buildTweetComponents(this.state.tweets)}
                                <NewTweet username={this.state.username} updateTweets={this.getTweets} twitterAccounts={this.state.twitterAccounts}/> 
                    </div>
                }
            </div>
        );
    }


    buildTweetComponents(tweetObjs) {
        let tweetComponents = tweetObjs.map((tweet, index) => <Tweet tweet={tweet} twitterAccounts={this.state.twitterAccounts} refreshTweet={this.refreshTweet} updateTweets={this.getTweets}/>)

        return (tweetComponents);
    }


    refreshTweet(currentTweet) {
        let index = this.state.tweets.findIndex(element => element.post_id === currentTweet.post_id);

        if (index !== -1) {
            let editsContainer = clone(this.state.tweets);

            editsContainer[index] = clone(currentTweet);

            this.setState({ tweets: editsContainer });
        }
    }
}

export default LoggedIn;