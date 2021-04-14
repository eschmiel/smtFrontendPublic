import { endPoints } from '~/configs/mainConfig.js';


function SmtAccountsMessenger() { }


SmtAccountsMessenger.prototype.login = async function (loginData) {
    let loginSuccessful = false;

    let request = new Request(endPoints.login,
        {
            method: 'POST',
            credentials: 'include',
            body: loginData,
        });

    let response = await fetch(request, { credentials: 'include' });
    let data = await response.json();
    loginSuccessful = data.loginSuccessful;

    if (!loginSuccessful) console.log('login was unsuccessful on server side');

    return loginSuccessful;
}


SmtAccountsMessenger.prototype.logout = async function () {
    fetch(endPoints.logout, { method: 'POST', credentials: 'include' });

    document.cookie = "sessionId=;max-age=0;expires=-1";
    document.cookie = "loggedIn=;max-age=0;expires=-1";

    window.location.reload();
}


SmtAccountsMessenger.prototype.createAccount = async function (newUserData) {
    let createUserRequest = new Request(endPoints.createUser,
        {
            method: 'POST',
            credentials: 'include',
            body: newUserData
        });

    await fetch(createUserRequest);

    let loginSuccessful = await this.login(newUserData);

    return loginSuccessful;
}


SmtAccountsMessenger.prototype.deleteUserAccount = async function () {
    await fetch(endPoints.deleteUserAccount, { method: 'POST', credentials: 'include' });
}


SmtAccountsMessenger.prototype.linkTwitterAccount = async function () {
    let response = await fetch(endPoints.linkTwitterAccount, { method: 'GET', credentials: 'include' });
        let authorizationLink = await response.text();
        return authorizationLink;
}


SmtAccountsMessenger.prototype.unlinkTwitterAccounts = async function (requestData) {
    let unlinkRequest = new Request(endPoints.unlinkTwitterAccount,
        {
            method: 'POST',
            credentials: 'include',
            body: requestData
        });

    await fetch(unlinkRequest);
}


export default new SmtAccountsMessenger();