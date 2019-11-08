import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
//import Editor from './Editor'
import Message from './Message'
import Editor from './Editor';

const host = 'http://localhost:8080';
const user = 'vic';

function App() {

  const [messages, setMessages] = useState([]);

  async function loadData() {
    await fetch(`${host}/api/tweets/`, {
      method: "GET"
    }).then((response) => {
      return response.json();
    }).then((result) => {
      setMessages(result);
    });
  }

  async function saveMessage (text) {
    fetch(`${host}/api/tweets/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "user": user,
            "text": text
        })
    }).then(() =>{
      loadData();
    });
  }

  useEffect(() => {
    loadData();
  }, []);


  return (
    < div >

      <h1 className="page-title">Tweeta</h1>
      <Editor handleSave={saveMessage}/>
      {
        messages.map((message) => {
          return (
            <Message user={message.user} text={message.text} />
          );
        })
      }

    </div >
  );
}

export default App;
