export const CHAT_SET_USER = 'chat/CHAT_SET_USER';
export const CHAT_SEND_MESSAGE = 'chat/CHAT_SEND_MESSAGE';
export const CHAT_SEND_MESSAGE_SUCCESS = 'chat/CHAT_SEND_MESSAGE_SUCCESS';
export const CHAT_SEND_MESSAGE_ERROR = 'chat/CHAT_SEND_MESSAGE_ERROR';
export const CHAT_SEND_MESSAGE_DISABLED = 'chat/CHAT_SEND_MESSAGE_DISABLED';

const initialState = {
  user: null,
  messages: [],
  isLoading: false,
  error: null,
  isDisabled: false,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_SET_USER:
      return Object.assign({}, state, {
        user: action.user,
      });
    case CHAT_SEND_MESSAGE:
      return Object.assign({}, state, {
        isLoading: true,
        error: null,
      });
    case CHAT_SEND_MESSAGE_SUCCESS: {
      const newMessage = [...state.messages];
      newMessage.push(action.message);
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        messages: newMessage,
      });
    }
    case CHAT_SEND_MESSAGE_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        isLoading: false,
      });
    case CHAT_SEND_MESSAGE_DISABLED:
      return Object.assign({}, state, {
        isDisabled: true,
        isLoading: false,
        error: null,
      });
    default:
      return state;
  }
};

export default chatReducer;
