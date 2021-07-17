import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/users.css';

function Users() {
    return (
        <div className="chats">
            <Avatar style={{marginLeft:"20px",marginBottom:"4px"}}/>
            <div className="chat-texts">
                <h2>Chat room</h2>
                <p>This is the last message.</p>
            </div>
        </div>
    )
}

export default Users
