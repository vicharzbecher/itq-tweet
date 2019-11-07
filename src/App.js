import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="page-title">
        Tweeta
      </h1>
      <div className="message-container">
        <div className="message">
          <div className="user" >Yo</div>
          <div className="text" >Este es el texto del tweet</div>
        </div>
      </div>
    </div>
  );
}

export default App;
