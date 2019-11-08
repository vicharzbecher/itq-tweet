import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
//import Editor from './Editor'
import Message from './Message'

const host = 'http://localhost:8080'

function App() {

  const [messages, setMessages] = useState([]);

  async function loadData() {
    fetch(`${host}/api/tweets/`, {
      method: "GET"
    }).then((response) => {
      return response.json();
    }).then((result) => {
      setMessages(result);
    });
  }

  useEffect(() => {
    loadData();
  }, [messages]);


  return (
    < div >

      <h1 className="page-title">Tweeta</h1>

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
