import React from 'react';

function Message({ user, text, listId, handleDelete }) {
    return (
        <div className="message-container">
            <div className="message">
                <div className="user" >{user}</div>
                <div className="text" >{text}</div>
                <button onClick={() => { handleDelete(listId) }} >Delete</button>
            </div>
        </div>
    );
}

export default Message;