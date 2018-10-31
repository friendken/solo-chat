import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

const ChatHeaderComponent = ({ user }) => (
  <div className="chat_header">
    {user}
    <div className="chat_status">ONLINE</div>
  </div>
);

ChatHeaderComponent.propTypes = {
  user: string.isRequired,
};

const mapStateToProps = ({ chatReducer }) => ({
  user: chatReducer.user,
});

const ChatHeader = connect(mapStateToProps, null)(ChatHeaderComponent);

export default ChatHeader;
