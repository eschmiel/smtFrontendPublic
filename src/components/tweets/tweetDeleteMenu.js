import React from 'react';
import '../../css/tweets/TweetDeleteMenu.css';
import TweetTitle from "./tweetTitle.js"; 

class TweetDeleteMenu extends React.Component {
    constructor(props) {
        super(props);

        this.cancel = this.cancel.bind(this);
        this.requestTweetDelete = this.requestTweetDelete.bind(this);
    }

    cancel() {
        this.props.onChangeTweetState('Display');
    }

    requestTweetDelete() {
        fetch('https://streamtoggle-backend.herokuapp.com/tweet/deleteTweet/' + this.props.tweet.post_id, { method: 'POST', credentials: 'include' }).then((response) => this.props.updateTweets() );
    }

    render() {
        return ( 
            <div className="Tweet">
                <div className="TweetHeader">
                    <div className="Toggle">
                    </div>
                    <TweetTitle tweet_title={this.props.tweet.tweet_title} />
                </div>
                <div className="TweetContent">
                    <div className="TweetDeleteMenu">
                        <h2>
                            Are you sure you want to delete this tweet?
                        </h2>
                        <div className="TweetDeleteBtnContainer">
                            <div className="TweetDeleteBtn" onClick={this.requestTweetDelete} > CONFIRM</div>
                            <div className="TweetDeleteBtn" onClick={this.cancel} >CANCEL</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TweetDeleteMenu;