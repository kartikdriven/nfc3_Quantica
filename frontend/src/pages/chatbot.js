import React from 'react';
import './chatbot.css';

function chatbot() {
  return (
    <div className='main section'>
        <div className='title'>CHATBOT</div>
        <div className="chatbot-ui">
        <input type="text" className="prompt-box" placeholder="Enter your query" />
        <div className="response-area"></div>
        </div>
    </div>
  );
}

export default chatbot;