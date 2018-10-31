import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { bindActionCreators } from 'redux';
import { chatActions } from '../actions';
import ChatArea from './ChatArea';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import '../stylesheets/ChatArea.css';

class ChatBoxComponent extends Component {
  static propTypes = {
    sendMessageAction: func.isRequired,
  }

  componentDidMount() {
    const { sendMessageAction } = this.props;
    sendMessageAction({ from: 'robo', message: 'Hi, how can I help you' });
  }

  render() {
    return (
      <div className="chat">
        <ChatHeader />
        <ChatArea />
        <ChatInput />
      </div>
    );
  }
}

const actions = pick(chatActions, [
  'sendMessageAction',
]);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const ChatBox = connect(null, mapDispatchToProps)(ChatBoxComponent);

export default ChatBox;
