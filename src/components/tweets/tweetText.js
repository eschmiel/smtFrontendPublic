import React from 'react';
import '../../css/tweets/TweetText.css';

function TweetText(props) {
    return (
        <div className="TweetTextBox">
            <p className="TweetTextContent">{props.tweet_text}</p>
        </div>
    );    
}

export default TweetText;