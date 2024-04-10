import React from 'react';
import './chatformat.css';
import Contact from './Contactlist';
import ChatWindow from './chatwindow';
import NavBar from './Navbar';
const ChatFormat = () => {
    return (
        <div>
        <NavBar/>
        <div className='contactlist-box' >
        <Contact/>
        <ChatWindow/>
        </div>
        </div>
     );
}
 
export default ChatFormat;