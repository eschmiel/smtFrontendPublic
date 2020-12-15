import React from 'react';
import '../../css/tweets/TweetEdit.css';
import TweetForm from './tweetForm.js';


class TweetEdit extends React.Component {
    constructor(props) {
        super(props);

        this.handleReturnedEditedTweet = this.handleReturnedEditedTweet.bind(this);
        this.cancel = this.cancel.bind(this);

        this.state = {
            formOptions: {
                tweet: Object.assign({}, props.tweet),                
                twitterAccounts: props.twitterAccounts,                
                submitRequestUrl: 'https://streamtoggle-backend.herokuapp.com/tweet/editTweet/' + props.tweet.post_id,
                handlePostSubmit: this.handleReturnedEditedTweet,
                onCancel: this.cancel
            }
        };            
    }


    handleReturnedEditedTweet(response) {
        response.json().then((data) => { console.log(data); this.props.refreshTweet(data) });
        this.cancel();
    }


    cancel() {
        this.props.onChangeTweetState("Display");
    }


    render() {
        return (
            <TweetForm formOptions={this.state.formOptions} />
        );
    }
    
}

export default TweetEdit;