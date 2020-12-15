import React from 'react';
import '../../css/tweets/NewTweet.css';
import TweetForm from './tweetForm.js';

class NewTweet extends React.Component {
    constructor(props) {
        super(props);

        this.setButtonState = this.setButtonState.bind(this);
        this.setCreateTweetState = this.setCreateTweetState.bind(this);
        this.postCreateTweetFormSubmit = this.postCreateTweetFormSubmit.bind(this);

        this.state = {
            componentState: 'Button',
            formOptions: {
                tweet: {},
                twitterAccounts: props.twitterAccounts,
                addedSubmitData: { username: props.username },
                submitRequestUrl: 'https://streamtoggle-backend.herokuapp.com/tweet/createTweet/',
                handlePostSubmit: this.postCreateTweetFormSubmit,
                onCancel: this.setButtonState
            }
        };      
    }

    postCreateTweetFormSubmit(res) {
        this.setButtonState();
        this.props.updateTweets();
    }

    setButtonState() {
        this.setState({ componentState: 'Button' });
    }

    setCreateTweetState() {
        this.setState({ componentState: 'CreateTweet' });
    }

    render() {
        return (
            <div>
                {
                    this.state.componentState === "Button" ?
                    <div className="NewTweetBtn" onClick={this.setCreateTweetState}>New Tweet</div> :
                    this.state.componentState === "CreateTweet" ?
                    <TweetForm formOptions={this.state.formOptions} /> : ''
                }
            </div>
        );
    }
}

export default NewTweet;