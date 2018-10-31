export const CHAT_SET_USER = 'chat/CHAT_SET_USER';

const initialState = {
  user: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_SET_USER:
      return Object.assign({}, state, {
        user: action.user,
      });
    default:
      return state;
  }
};

export default chatReducer;
