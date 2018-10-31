import React from 'react';
import { string } from 'prop-types';

const ChatMessage = ({ message, from }) => (
  <div className={`chat_bubble-${from}`} dangerouslySetInnerHTML={{__html: message }} />
);

ChatMessage.propTypes = {
  message: string.isRequired,
  from: string.isRequired,
};

export default ChatMessage;
