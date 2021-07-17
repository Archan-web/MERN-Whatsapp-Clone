import React from 'react';
import '../css/home.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import Chats from './Chats';

function Home() {
    return (
        <div className="home">
            <div className="sidebar">
                <div className="icons">
                    <IconButton>
                    <Avatar src="https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png" style={{marginLeft:"16px"}}/>
                        </IconButton>
                    <div className="wpicons">
                        <IconButton>
                            <DonutLargeIcon />
                        </IconButton>
                        <IconButton>
                            <ChatIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="search">
                    <SearchIcon/>
                    <input type="text"/>
                </div>
                <div className="sidebarChats">
                    <Chats/>
                    <Chats/>
                    <Chats/>
                    <Chats/>
                </div>
            </div>
            <div className="chatdetails">We are chat details</div>
        </div>
    )
}

export default Home
