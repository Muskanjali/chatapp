import React from "react";
import './contactlist.css';
import profile from './profile.jpg'
import user from './user.png';
import { FaRegEdit } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { LiaSearchSolid } from "react-icons/lia";
const Contact = () => {
    return (
        <div className="contact-list">
            <div className="chatheader">
                <h3>Chats</h3><FaRegEdit className="editicon" /><VscThreeBars className="bar-icon" />
            </div>
            <div className="searchbar">
                <LiaSearchSolid className="searchicon" /><input type="search" placeholder="Search or start a new chat" />
            </div>
            <div className="chatbox-container">
                {/* contact1 */}
                <div className="chatbox">
                    <img src={profile} alt="profile" />
                    {/* chat section */}
                    <div className="chatsec">
                        <h5>Riya <span>10:00AM</span></h5>
                        <p>Hii are u free Today?</p>
                    </div>

                </div>
                {/* contact2 */}
                <div className="chatbox">
                    <img src={user} alt="profile" />
                    {/* chat section */}
                    <div className="chatsec">
                        <h5>Vishu<span>1:00PM</span></h5>
                        <p>Hello, how are u?</p>
                    </div>

                </div>
                {/* contact3 */}
                <div className="chatbox">
                    <img src={user} alt="profile" />
                    {/* chat section */}
                    <div className="chatsec">
                        <h5>Excel <span>Yesterday</span></h5>
                        <p>New Pdf's?</p>
                    </div>
                </div>
                {/* contact4 */}
                <div className="chatbox">
                    <img src={user} alt="profile" />
                    {/* chat section */}
                    <div className="chatsec">
                        <h5>Bestie<span>8:00AM</span></h5>
                        <p>Everyone Fun...</p>
                    </div>
                </div>
                {/* contact5 */}
                <div className="chatbox">
                    <img src={user} alt="profile" />
                    {/* chat section */}
                    <div className="chatsec">
                        <h5>Family<span>Yesterday</span></h5>
                        <p>Happy Family</p>
                    </div>

                </div>
                {/* contact6 */}
                <div className="chatbox">
                    <img src={user} alt="profile" />
                    {/* chat section */}
                    <div className="chatsec">
                        <h5>Hasrat<span>9:00AM</span></h5>
                        <p>whats's up?</p>
                    </div>

                </div>
                {/* contact7 */}
                <div className="chatbox">
                    <img src={user} alt="profile" />
                    {/* chat section */}
                    <div className="chatsec">
                        <h5>Hasrat<span>9:00AM</span></h5>
                        <p>whats's up?</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;