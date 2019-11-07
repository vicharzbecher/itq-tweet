import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message'

function App() {
  return (
    <div>
      <h1 className="page-title">
        Tweeta
      </h1>

      <Message user="Yo" text="Mi texto" />
      <Message user="Tu" text="Tu texto" />
      <Message user="El" text="Su texto" />

    </div>
  );
}

export default App;
