import React, { useState } from 'react';

function Editor({ handleSave }) {



    const [messageText, setMessageText] = useState("");

    return (
        <div>
            <input type="text" value={messageText} onChange={(event) => setMessageText(event.target.value)} />
            <button onClick={() => { handleSave(messageText) }}>Tweet</button>
        </div>
    );
}

export default Editor;