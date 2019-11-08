import React from 'react';
import './App.css';
import Message from './Message'

function App() {

  const messages = [
    {
      user: 'Yo',
      text: 'Mi texto'
    },
    {
      user: 'Tu',
      text: 'Tu texto'
    },
    {
      user: 'El',
      text: 'Su texto'
    },
    {
      user: 'Nosotros',
      text: 'Nuestro texto'
    },
  ];

  return (
    <div>
      <h1 className="page-title">
        Tweeta
      </h1>

      {messages.map((message) => {
        return (
          <Message user={message.user} text={message.text} />
        );
      })}

    </div>
  );
}

export default App;
