import React, { useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from '../axios';

function Chat({ messages }) {
    const[input,setInput] = useState("");
    const sendMessage = async (e)=>{
        e.preventDefault();

        await axios.post("/messages/new",{
            message:input,
            name:"demo",
            timestamp:"10pm",
            received:false,
        });
        setInput("");
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>room name</h3>
                    <p>last seen at...</p>
                </div>
                <div className="chat__headerRight">
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
            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{message.timestamp}</span>
                    </p>
                ))}

            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form >
                    <input value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    type="text" placeholder="type amessage" />
                    <button onClick = {sendMessage} type="submit">send amessage</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}

export default Chat;
