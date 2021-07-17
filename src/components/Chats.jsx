import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/chats.css';

function Chats() {
    return (
        <div className="chats">
            <Avatar />
            <div className="chat-texts">
                <h2>Chat room</h2>
                <p>This is the last message.</p>
            </div>
        </div>
    )
}

export default Chats
