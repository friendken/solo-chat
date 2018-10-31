import React from 'react';
import { arrayOf, shape, string, instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import ChatMessage from './ChatMessage';

const ChatAreaComponent = ({ messages }) => (
  <div className="chat_s">
    {
      messages.map((message, index) => (
        <ChatMessage key={index} {...message} />
      ))
    }
  </div>
);

ChatAreaComponent.propTypes = {
  messages: arrayOf(shape({
    message: string,
    from: string,
    createdAt: instanceOf(Date),
  })).isRequired,
};

const mapStateToProps = ({ chatReducer }) => ({
  messages: chatReducer.messages,
});

const ChatArea = connect(mapStateToProps)(ChatAreaComponent);
export default ChatArea;
