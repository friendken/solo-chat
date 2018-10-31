import { CHAT_SET_USER, CHAT_SEND_MESSAGE } from '../reducers/chat/chatReducer';

const setUserAction = user => ({
  type: CHAT_SET_USER,
  user,
});

const sendMessageAction = payload => ({
  type: CHAT_SEND_MESSAGE,
  payload,
});

export default {
  setUserAction,
  sendMessageAction,
};
