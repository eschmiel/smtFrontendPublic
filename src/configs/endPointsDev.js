const endPoints = {
    createUser: 'http://localhost:3000/account/createUserAccount',
    deleteUserAccount: 'http://localhost:3000/account/deleteUserAccount',

    login: 'http://localhost:3000/login',
    logout: 'http://localhost:3000/logout',

    linkTwitterAccount: 'http://localhost:3000/account/linkTwitterAccount',
    unlinkTwitterAccount: 'http://localhost:3000/account/unlinkTwitterAccount',
    
    createTweet: 'http://localhost:3000/tweet/createTweet/',
    editTweet: 'http://localhost:3000/tweet/editTweet/',
    deleteTweet: 'http://localhost:3000/tweet/deleteTweet/',
    toggleTweet: 'http://localhost:3000/tweet/toggleTweet/',

    getUserTweets: 'http://localhost:3000/tweet/getUserTweets',
    getLinkedAccounts: 'http://localhost:3000/account/getLinkedAccounts',
    getUsername: 'http://localhost:3000/account/getUsername'
};

export default endPoints;