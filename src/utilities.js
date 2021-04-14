const utilities = {

    getCookie: function (cookieName) {
        let cookies = document.cookie;

        if (cookies) {
            let desiredCookie = cookies.split('; ').find(cookie => cookie.startsWith(cookieName));
            let cookieValue = desiredCookie.split('=')[1];

            //Add error handling for if cookie doesn't exist later

            return cookieValue;
        }
    },

    doesCookieExist: function (cookieName) {
        const cookies = document.cookie;
        console.log(document.cookie);
        if (cookies) {
            const cookieExists = cookies.split(';').some((checkedCookie) => checkedCookie.trim().startsWith(cookieName + '='));
            console.log('loggedIn exists: ' + cookieExists);
            return cookieExists;
        }
    }

}

export default utilities;