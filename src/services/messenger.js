import { endPoints } from '~/configs/mainConfig.js';

function Messenger() {}

Messenger.prototype.getTweets = function () {
    fetch(endPoints.getUserTweets, { method: 'GET', credentials: 'include' })
        .then(response => response.json())
        .then(data => this.setState({ tweets: data }));
};

Messenger.prototype.getLinkedAccounts = function () {
    fetch(endPoints.getLinkedAccounts, { method: 'GET', credentials: 'include' })
        .then(response => response.json())
        .then(data => this.setState({ twitterAccounts: data }));
};

Messenger.prototype.getUsername = function () {
    fetch(endPoints.getUsername, { method: 'GET', credentials: 'include' })
        .then(response => response.text())
        .then(data => this.setState({ username: data }));
};

export default new Messenger();