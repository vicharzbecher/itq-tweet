import React from 'react';

function Message({ user, text }) {
    return (
        <div className="message-container">
            <div className="message">
                <div className="user" >{user}</div>
                <div className="text" >{text}</div>
            </div>
        </div>
    );
}

export default Message;