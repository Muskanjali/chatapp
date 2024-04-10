import React from 'react';
import './chatwindow.css';
import profile from './profile.jpg'
import { IoVideocamOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";
import { IoSend } from "react-icons/io5";
const ChatWindow = () => {
    return (  
        <div className='window-container'>
            <div className='window-header'>
            <img src={profile} alt='profileimg'/><IoVideocamOutline  className='header-icon'/><IoCallOutline className='call-icon' /><LiaSearchSolid className='search-icon'/>
            <div className='textbox'>
            <h4>Riya<span></span></h4>
            <p>last seen today at 7:55pm</p>
            </div>
            </div>
            <div className='msg-box'>
                <input type='text' placeholder='Type a Message'/>
                <button id='btn'><IoSend /></button>
            </div>
        </div>
    );
}
 
export default ChatWindow;