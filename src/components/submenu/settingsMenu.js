import React from 'react';
import '../../css/submenu/SettingsMenu.css';


function SettingsMenu(props) {
    return (
        <div className="SettingsMenu">
            <p style={{ fontWeight: "bold" }}>USER</p>
            <p>{props.username}</p>
            <div className="BtnContainer">
                <a href="https://eschmiel.github.io/smt"><div className="SubmenuBtn">About</div></a>
                <div className="SubmenuBtn" id="Unlink Account" onClick={props.changeSubmenuState}>Unlink Account</div>
                <div className="SubmenuBtn" id="Delete User" onClick={props.changeSubmenuState}>Delete User</div>
            </div>
        </div>
    );
}


export default SettingsMenu;