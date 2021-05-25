import React from 'react'
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>room name</h2>
                <p>this is chat room message</p>
            </div>
        </div>
    )
}

export default SidebarChat;
