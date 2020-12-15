import React from 'react';
import '../../css/tweets/TweetDisplayMenu.css';

class TweetDisplayMenu extends React.Component {
    constructor(props) {
        super(props);

        this.setEditState = this.setEditState.bind(this);
        this.setDeleteState = this.setDeleteState.bind(this);
    } 

    setEditState() {
        this.props.onChangeTweetState('Edit');
    }

    setDeleteState() {
        this.props.onChangeTweetState('Delete');
    }

    render() {
        return (
            <div className="TweetBtnContainer">
                <div className="TweetBtn" onClick={this.setDeleteState}>DELETE</div>
                <div className="TweetBtn" onClick={this.setEditState}>EDIT</div>
            </div>
        );
    }
}

export default TweetDisplayMenu;