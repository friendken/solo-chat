import React from 'react';
import TextInput from './TextInput';
import Button from './Button';

const MessageBar = () => (
  <div className="messageBar">
    <TextInput />
    <Button>Send</Button>
  </div>
);

export default MessageBar;
