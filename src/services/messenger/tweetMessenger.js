import { endPoints } from '~/configs/mainConfig.js';

function TweetMessenger() { }

TweetMessenger.prototype.getTweets = function () {
    fetch(endPoints.getUserTweets, { method: 'GET', credentials: 'include' })
        .then(response => response.json())
        .then(data => this.setState({ tweets: data }));
};

TweetMessenger.prototype.deleteTweet = async function (post_id) {
    await fetch(endPoints.deleteTweet + post_id,
        {
            method: 'POST',
            credentials: 'include'
        })
    return;
};

TweetMessenger.prototype.toggleTweet = async function (post_id) {
    let updatedTweet = await fetch(endPoints.toggleTweet + post_id, { method: 'POST', credentials: 'include' });
    let processedUpdatedTweet = await updatedTweet.json();
    return processedUpdatedTweet;
};

export default new TweetMessenger();