import React from 'react';
import '../../css/tweets/TweetTitle.css';

function TweetTitle(props) {
    return (
        <div className="TweetTitle">
            <h2>{props.tweet_title}</h2>
        </div>
    );
}

export default TweetTitle;