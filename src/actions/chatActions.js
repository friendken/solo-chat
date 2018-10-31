import { CHAT_SET_USER } from '../reducers/chat/chatReducer';

const setUser = user => ({
  type: CHAT_SET_USER,
  user,
});

export default {
  setUser,
};
