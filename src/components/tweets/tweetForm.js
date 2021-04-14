import React from 'react';
import '../../css/tweets/TweetEdit.css';
import TweetTitleForm from './tweetTitleForm';
import TwitterAccountForm from './twitterAccountForm';
import TweetTextForm from './tweetTextForm.js';
import TweetEditMenu from './tweetEditMenu.js';


class TweetForm extends React.Component {
    constructor(props) {
        super(props);

        let defaultTweetValues = { tweet_title: '', tweet_text: '', account_id: props.formOptions.twitterAccounts[0].account_id};
        let defaultFormOptions = {
            tweet: {},
            addedSubmitData: {},
            submitRequestUrl: '/',
            handlePostSubmit: () => { },
            onCancel: () => { }
        };

        this.state = {
            formData: Object.assign(defaultTweetValues, props.formOptions.tweet),
            formOptions: Object.assign(defaultFormOptions, props.formOptions)
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {      
        this.formEdits = Object.assign({}, this.state.formData);

        this.propertyEdit = event.target.type;

        switch (this.propertyEdit) {

            case 'text':
                this.formEdits.tweet_title = event.target.value;
                break;

            case 'select-one':
                this.formEdits.account_id = event.target.value;
                break;

            case 'textarea':
                this.formEdits.tweet_text = event.target.value;
                break;

            default:
                console.log("Attempted to change a property that is not a tweet edit form field");
                break;
        }

        this.setState({
            formData: Object.assign({}, this.formEdits)
        });
    }


    async handleSubmit(event) { //We have to use a custom submit handler because the post_id wouldn't be included in the form data. 
                                //We also collect the edited tweet in the database in the http response and refresh the tweets in our REACT state to reflect the new state of the database
        event.preventDefault();
        
        let newTweetData = new FormData();

        newTweetData.append("account_id", this.state.formData.account_id);
        newTweetData.append("tweet_title", this.state.formData.tweet_title);
        newTweetData.append("tweet_text", this.state.formData.tweet_text);

        for (const [key, value] of Object.entries(this.state.formOptions.addedSubmitData)) {
            newTweetData.append(key, value);
        }       

        let requestUrl = this.state.formOptions.submitRequestUrl;

        let request = new Request(requestUrl,
            {
                method: 'POST',
                credentials: 'include',
                body: newTweetData
            });

        let res = await fetch(request);

        this.state.formOptions.handlePostSubmit(res);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="Tweet">
                <div className="TweetHeader">
                    <div className="Toggle" />
                    <TweetTitleForm tweet_title={this.state.formData.tweet_title} handleChange={this.handleChange} />
                </div>

                <div className="TweetContent">
                    <TwitterAccountForm account_id={this.state.formData.account_id} twitterAccounts={this.state.formOptions.twitterAccounts} handleChange={this.handleChange} />
                    <TweetTextForm tweet_text={this.state.formData.tweet_text} handleChange={this.handleChange} />
                    <TweetEditMenu onChangeTweetState={this.state.formOptions.onCancel} />
                </div>
            </form>
        );
    }
}

export default TweetForm;