import React from 'react';
import '../../css/tweets/TweetTextForm.css';

class TweetTextForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.props.handleChange(event);
    }

    render() {
        return (
            <textarea name="tweetText" style={{ height: '80px' }} className="TweetTextEdit" value={this.props.tweet_text} onChange={this.handleChange}></textarea>
        );
    }
}

export default TweetTextForm;