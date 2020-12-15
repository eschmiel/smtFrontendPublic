import React from 'react';
import '../../css/tweets/Tweet.css';
import TweetTitle from './tweetTitle.js';
import TwitterAccount from './twitterAccount.js';
import TweetText from './tweetText.js';
import TweetDisplayMenu from './tweetDisplayMenu.js';

class TweetDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTweet = this.toggleTweet.bind(this);
    }

    async toggleTweet() {
        let updatedTweet = await fetch('https://streamtoggle-backend.herokuapp.com/tweet/toggleTweet/' + this.props.tweet.post_id, { method: 'POST', credentials: 'include' });
        let processedUpdatedTweet = await updatedTweet.json();
        this.props.refreshTweet(processedUpdatedTweet);
    }

    render() {
        let screen_name = this.props.twitterAccounts.find(account => account.account_id === this.props.tweet.account_id).screen_name;

        return (
            <div className="Tweet">
                <div className="TweetHeader">
                    {this.props.tweet.active_status === "inactive" ? <div className="Toggle" onClick={this.toggleTweet}><p>Toggle</p></div> :
                     this.props.tweet.active_status === "active" ? <div className="ToggleActive" onClick={this.toggleTweet}><p>Toggle</p></div> : ''}
                    <TweetTitle tweet_title={this.props.tweet.tweet_title} />
                </div>

                <div className="TweetContent">
                    <TwitterAccount twitter_account={screen_name} />
                    <TweetText tweet_text={this.props.tweet.tweet_text} />
                    <TweetDisplayMenu onChangeTweetState={this.props.onChangeTweetState} />
                </div>
            </div>
        );
    }
}

export default TweetDisplay;