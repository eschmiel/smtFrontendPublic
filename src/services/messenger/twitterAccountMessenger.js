import { endPoints } from '~/configs/mainConfig.js';


function TwitterAccountMessenger() { }


TwitterAccountMessenger.prototype.getLinkedAccounts = function () {
    fetch(endPoints.getLinkedAccounts, { method: 'GET', credentials: 'include' })
        .then(response => response.json())
        .then(data => this.setState({ twitterAccounts: data }));
};


TwitterAccountMessenger.prototype.linkTwitterAccount = async function () {
    let response = await fetch(endPoints.linkTwitterAccount, { method: 'GET', credentials: 'include' });
    let authorizationLink = await response.text();
    return authorizationLink;
};


TwitterAccountMessenger.prototype.unlinkTwitterAccounts = async function (requestData) {
    let unlinkRequest = new Request(endPoints.unlinkTwitterAccount,
        {
            method: 'POST',
            credentials: 'include',
            body: requestData
        });

    await fetch(unlinkRequest);
};


export default new TwitterAccountMessenger();