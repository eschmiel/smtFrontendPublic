import React from 'react';


class LoginMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuStateChange = this.handleMenuStateChange.bind(this);
    }


    handleMenuStateChange() {
        this.props.onMenuStateChange('CreatingAccount');
    }


    render() {
        return <div className="CreateAccountBtn MenuBtn" onClick={this.handleMenuStateChange}> Create Account </div>;
    }
}


export default LoginMenu;