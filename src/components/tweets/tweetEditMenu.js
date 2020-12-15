import React from 'react';
import '../../css/tweets/TweetEditMenu.css';

class TweetEditMenu extends React.Component {
    constructor(props) {
        super(props);

        this.cancel = this.cancel.bind(this);        
    }

    cancel() {
        this.props.onChangeTweetState('Display');
    }

    render() {
        return (
            <div className="TweetBtnContainer">
                <div className="TweetBtn" onClick={this.cancel} >CANCEL</div>
                <button type="submit" className="TweetBtn">CONFIRM</button>
            </div>
        );       
    }
}

export default TweetEditMenu;