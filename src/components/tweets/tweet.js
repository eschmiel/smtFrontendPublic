import React from 'react';
import '../../css/tweets/Tweet.css';
import TweetDisplay from './tweetDisplay.js';
import TweetEdit from './tweetEdit.js';
import TweetDelete from './tweetDeleteMenu.js';

class Tweet extends React.Component {
    constructor(props) {
        super(props);

        this.setTweetState = this.setTweetState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            tweetState: 'Display'
        };
    }

    setTweetState(newTweetState) {
        this.setState({ tweetState: newTweetState });
    } 

    async handleSubmit(event) { //We have to use a custom submit handler because the post_id wouldn't be included in the form data. 
        //We also collect the edited tweet in the database in the http response and refresh the tweets in our REACT state to reflect the new state of the database
        event.preventDefault();

        let edits = new FormData();

        edits.append("account_id", this.state.tweetEdits.account_id);
        edits.append("tweet_title", this.state.tweetEdits.tweet_title);
        edits.append("tweet_text", this.state.tweetEdits.tweet_text);

        let requestUrl = "https://streamtoggle-backend.herokuapp.com/tweet/editTweet/" + this.state.tweetEdits.post_id;

        let request = new Request(requestUrl,
            {
                method: 'POST',
                credentials: 'include',
                body: edits
            });

        let res = await fetch(request);
        let currentTweet = await res.json();
        this.props.refreshTweet(currentTweet);
        this.props.onChangeTweetState('Display');
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
                    refreshTweet={this.props.refreshTweet}
                    handleSubmit={this.handleSubmit} /> :

                 this.state.tweetState === 'Delete' ? <TweetDelete tweet = {this.props.tweet} onChangeTweetState={this.setTweetState} updateTweets={this.props.updateTweets}/> : '' }
            </div>
        );
    }
}

export default Tweet;