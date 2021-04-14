import { endPoints } from '~/configs/mainConfig.js';


function UserAccountMessenger() { }


UserAccountMessenger.prototype.getUsername = function () {
    fetch(endPoints.getUsername, { method: 'GET', credentials: 'include' })
        .then(response => response.text())
        .then(data => this.setState({ username: data }));
};

UserAccountMessenger.prototype.login = async function (loginData) {
    let loginSuccessful = false;

    let request = new Request(endPoints.login,
        {
            method: 'POST',
            credentials: 'include',
            body: loginData,
        });

    let response = await fetch(request);
    let data = await response.json();
    loginSuccessful = data.loginSuccessful;

    if (!loginSuccessful) console.log('login was unsuccessful on server side');

    return loginSuccessful;
}

UserAccountMessenger.prototype.logout = async function () {
    fetch(endPoints.logout, { method: 'POST', credentials: 'include' });

    document.cookie = "sessionId=;max-age=0;expires=-1";
    document.cookie = "loggedIn=;max-age=0;expires=-1";

    window.location.reload();
}

UserAccountMessenger.prototype.createAccount = async function (newUserData) {
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

UserAccountMessenger.prototype.deleteUserAccount = async function () {
    await fetch(endPoints.deleteUserAccount, { method: 'POST', credentials: 'include' });
}


export default new UserAccountMessenger();