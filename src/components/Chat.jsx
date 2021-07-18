import { Avatar, IconButton } from '@material-ui/core';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import React, { useState } from 'react';
import '../css/chat.css';

function Chat({ messages }) {
    const [input,setInput]=useState("");

    const sendMessage=async(req,res)=>{
        try {
            if(input.trim()===""){
                window.alert("Don't leave the input field empty!");
            }
            else{
                const config={
                    headers:{
                        "Content-Type":"application/json"
                    }
                }
                await axios.post('api/auth/createmessage',
                    {
                        message:input,
                        name:"anonymous",
                        timestamp:"just now",
                        received:false
                    },
                    config
                )
                setInput("");
            }
        } catch (error) {
            console.log(error);
            window.alert(`Something went wrong!`);
        }
    }

    return (
        <div>
            <div className="chat-header">
                <IconButton>
                    <Avatar className="chat-avatar" />
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
                {
                    messages.map((message) => {
                        return <p className={message.received?"received-message":"sent-message"}>
                            <h6 className="senders-name">{message.name}</h6>
                            <span className="chat-message">{message.message}</span>
                            <span classsName="chats-time" style={{ fontSize: "10px", marginLeft: "340px" }}>{message.timestamp}</span>
                        </p>
                    })
                }

            </div>
            <form className="send-message-div">
                <InsertEmoticonIcon style={{ marginLeft: "20px", color: "gray" }} />
                <input type="text" className="message-input" placeholder="Type a message" onChange={(e)=>{setInput(e.target.value)}}/>
                <button type="submit" className="message-btn" value={input} onClick={sendMessage}><SendIcon /></button>
            </form>
        </div>
    )
}

export default Chat
