import React from 'react';
import TextInput from './TextInput';
import SendButton from './SendButton';

const MessageBar = () => (
  <div className="messageBar">
    <TextInput />
    <SendButton />
  </div>
);

export default MessageBar;
