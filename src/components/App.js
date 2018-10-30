import React from 'react';
import MessageBar from './MessageBar';
import ChatArea from './ChatArea';
import '../stylesheets/App.css';

const App = () => (
  <div className="app">
    <ChatArea />
    <MessageBar />
  </div>
);

export default App;
