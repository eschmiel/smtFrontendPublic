const endPoints = {
    createUser: 'https://streamtoggle-backend.herokuapp.com/account/createUserAccount',
    deleteUserAccount: 'https://streamtoggle-backend.herokuapp.com/account/deleteUserAccount',

    login: 'https://streamtoggle-backend.herokuapp.com/login',
    logout: 'https://streamtoggle-backend.herokuapp.com/logout',

    linkTwitterAccount: 'https://streamtoggle-backend.herokuapp.com/account/linkTwitterAccount',
    unlinkTwitterAccount: 'https://streamtoggle-backend.herokuapp.com/account/unlinkTwitterAccount',
    
    createTweet: 'https://streamtoggle-backend.herokuapp.com/tweet/createTweet/',
    editTweet: 'https://streamtoggle-backend.herokuapp.com/tweet/editTweet/',
    deleteTweet: 'https://streamtoggle-backend.herokuapp.com/tweet/deleteTweet/',
    toggleTweet: 'https://streamtoggle-backend.herokuapp.com/tweet/toggleTweet/',

    getUserTweets: 'https://streamtoggle-backend.herokuapp.com/tweet/getUserTweets',
    getLinkedAccounts: 'https://streamtoggle-backend.herokuapp.com/account/getLinkedAccounts',
    getUsername: 'https://streamtoggle-backend.herokuapp.com/account/getUsername'
};

export default endPoints;