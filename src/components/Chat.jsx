import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react'
import '../css/chat.css';

function Chat() {
    return (
        <div>
            <div className="chat-header">
                    <IconButton>
                        <Avatar className="chat-avatar"/>
                    </IconButton>
                <div className="chat-details">
                    <h2>Name</h2>
                    <p>Last seen at...</p>
                </div>
                <div className="chat-icons">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat-messages">
                <p className="received-message">
                    <h6 className="senders-name">Name</h6>
                    <span className="chat-message">This is a messages ahdsashdgvsaydgausidgusaydghwefiuegrfuisegrfuipsegrieusrgeuirgeuresauiroieasrhpoiarhpoaierheapiosrhoirhsdiorheoiwarhioearhoieashrioesahroihewroihesaoirhosierhsoeirh;seoirseuirgdsriu</span>
                    <span classsName="chats-time" style={{fontSize:"10px",marginLeft:"340px"}}>{new Date().toUTCString()}</span>
                </p>
                <br/>
                <p className="sent-message">
                    <h6 className="senders-name">Name</h6>
                    <span className="chat-message">This is a messages ahdsashdgvsaydgausidgusaydghwefiuegrfuisegrfuipsegrieusrgeuirgeuresauiroieasrhpoiarhpoaierheapiosrhoirhsdiorheoiwarhioearhoieashrioesahroihewroihesaoirhosierhsoeirh;seoirseuirgdsriu</span>
                    <span classsName="chats-time" style={{fontSize:"10px",marginLeft:"340px"}}>{new Date().toUTCString()}</span>
                </p>
                <p className="received-message">
                    <h6 className="senders-name">Name</h6>
                    <span className="chat-message">This is a messages ahdsashdgvsaydgausidgusaydghwefiuegrfuisegrfuipsegrieusrgeuirgeuresauiroieasrhpoiarhpoaierheapiosrhoirhsdiorheoiwarhioearhoieashrioesahroihewroihesaoirhosierhsoeirh;seoirseuirgdsriu</span>
                    <span classsName="chats-time" style={{fontSize:"10px",marginLeft:"340px"}}>{new Date().toUTCString()}</span>
                </p>
                <p className="sent-message">
                    <h6 className="senders-name">Name</h6>
                    <span className="chat-message">This is a messages ahdsashdgvsaydgausidgusaydghwefiuegrfuisegrfuipsegrieusrgeuirgeuresauiroieasrhpoiarhpoaierheapiosrhoirhsdiorheoiwarhioearhoieashrioesahroihewroihesaoirhosierhsoeirh;seoirseuirgdsriu</span>
                    <span classsName="chats-time" style={{fontSize:"10px",marginLeft:"340px"}}>{new Date().toUTCString()}</span>
                </p>
                <p className="sent-message">
                    <h6 className="senders-name">Name</h6>
                    <span className="chat-message">This is a messages ahdsashdgvsaydgausidgusaydghwefiuegrfuisegrfuipsegrieusrgeuirgeuresauiroieasrhpoiarhpoaierheapiosrhoirhsdiorheoiwarhioearhoieashrioesahroihewroihesaoirhosierhsoeirh;seoirseuirgdsriu</span>
                    <span classsName="chats-time" style={{fontSize:"10px",marginLeft:"340px"}}>{new Date().toUTCString()}</span>
                </p>
                
            </div>
        </div>
    )
}

export default Chat
