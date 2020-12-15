import React from 'react';
import '../../css/tweets/TweetTitle.css';

class TweetTitleForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event);
    }

    render() {
        return (
            <div className="TweetTitle">     
                <input type="text" id="TweetTitle" name="tweetTitle" value={this.props.tweet_title} onChange={this.handleChange} />
            </div>
        );
    }
}

export default TweetTitleForm;