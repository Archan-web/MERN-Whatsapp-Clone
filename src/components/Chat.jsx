import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';
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
                <p className="sent-message">
                    <h6 className="senders-name">Name</h6>
                    <span className="chat-message">This is a messages ahdsashdgvsaydgausidgus aydghwefiuegrfuisegrfuipsegrieusrgeuirgeuresauiroieasrhpoiarhpoaierheapiosrh oirhsdiorheoiwarhioearhoieashrioesahroihewroihesaoirho sierhsoeirh;seoirseuirgdsriu</span>
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
            <form className="send-message-div">
                <InsertEmoticonIcon style={{marginLeft:"20px",color:"gray"}}/>
                <input type="text" className="message-input" placeholder="Type a message"/>
                <button type="submit" className="message-btn"><SendIcon/></button>
            </form>
        </div>
    )
}

export default Chat
