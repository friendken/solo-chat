import React, { Component, createRef } from 'react';
import { bool, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get, pick } from 'lodash';
import { chatActions } from '../actions';
import TextInput from './TextInput';
import Button from './Button';

class ChatInputComponent extends Component {
  static propTypes = {
    isLoading: bool.isRequired,
    isDisabled: bool.isRequired,
    sendMessageAction: func.isRequired,
    error: string,
  }

  static defaultProps = {
    error: null,
  }

  constructor(props) {
    super(props);
    this.message = createRef();
  }

  componentDidMount() {
    this.message.current.focus();
  }

  handleSubmit = (el) => {
    el.preventDefault();
    const { sendMessageAction } = this.props;
    const value = get(this.message, 'current.value', '');
    if (value.trim() === '') {
      return false;
    }
    this.message.current.value = '';
    return sendMessageAction({ from: 'guest', message: value });
  }

  render() {
    const { error, isLoading, isDisabled } = this.props;
    return (
      <div className="chat_input">
        {
          error && <p className="error-message">{error}</p>
        }
        {
          isLoading && <p className="loading-message">loading...</p>
        }
        <form onSubmit={el => this.handleSubmit(el)}>
          <TextInput ref={this.message} placeholder="Type here..." className="chat_text" type="text" />
          {
            isLoading
              ? <Button type="button" className="chat_submit" name="..." />
              : <Button type="submit" disabled={isDisabled} className="chat_submit" name="send" />
          }
        </form>
      </div>
    );
  }
}

const actions = pick(chatActions, [
  'sendMessageAction',
]);

const mapStateToProps = ({ chatReducer }) => ({
  isLoading: chatReducer.isLoading,
  isDisabled: chatReducer.isDisabled,
  error: chatReducer.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const ChatInput = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatInputComponent);

export default ChatInput;
