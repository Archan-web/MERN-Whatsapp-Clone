import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/home.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import Pusher from 'pusher-js';
import Users from './Users';
import Chat from './Chat';

function Home() {
    const [messages,setMessages]=useState([]);

    const getAndSetMessages=async()=>{
        try {
            const {data}=await axios.get('/api/auth/getmessages');
            setMessages(data);
            console.log(data);
        } catch (error) {
            console.log(error);
            window.alert('Somethong went wrong!');
        }
    }

    useEffect(()=>{
        getAndSetMessages();
    },[])

    useEffect(() => {
        const pusher = new Pusher('ef5ed5973589604d871d', {
          cluster: 'ap2'
        });
    
        const channel = pusher.subscribe("messages");
        channel.bind('inserted', (newMessage) =>{
          setMessages([...messages,newMessage]);
        });

        return()=>{
            channel.unbind_all();
            channel.unsubscribe();
        }
      }, [messages])

    return (
        <div className="home">
            <div className="sidebar">
                <div className="icons">
                    <IconButton>
                    <Avatar src="https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png"/>
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
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className="sidebarChats">
                    <Users/>
                    <Users/>
                    <Users/>
                    <Users/>
                    <Users/>
                    <Users/>
                    <Users/>
                </div>
            </div>
            <div className="each-chat">
                <Chat messages={messages}/>
            </div>
        </div>
    )
}

export default Home
