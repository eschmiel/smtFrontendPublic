import React from 'react';
import '../../css/tweets/Tweet.css';
import TweetDisplay from './tweetDisplay.js';
import TweetEdit from './tweetEdit.js';
import TweetDelete from './tweetDeleteMenu.js';

class Tweet extends React.Component {
    constructor(props) {
        super(props);

        this.setTweetState = this.setTweetState.bind(this);

        this.state = {
            tweetState: 'Display'
        };
    }

    setTweetState(newTweetState) {
        this.setState({ tweetState: newTweetState });
    } 

    render() {

        return (
            <div>
                {this.state.tweetState === 'Display' ? <TweetDisplay tweet={this.props.tweet}
                    onChangeTweetState={this.setTweetState}
                    twitterAccounts={this.props.twitterAccounts}
                    refreshTweet={this.props.refreshTweet} /> :

                 this.state.tweetState === 'Edit' ? <TweetEdit tweet={this.props.tweet}
                    twitterAccounts={this.props.twitterAccounts}
                    onChangeTweetState={this.setTweetState}
                    refreshTweet={this.props.refreshTweet} /> :

                 this.state.tweetState === 'Delete' ? <TweetDelete tweet = {this.props.tweet} onChangeTweetState={this.setTweetState} updateTweets={this.props.updateTweets}/> : '' }
            </div>
        );
    }
}

export default Tweet;