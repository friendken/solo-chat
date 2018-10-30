import { combineReducers } from 'redux';
import chat from './chat/chatReducer';

const rootReducer = combineReducers({
  chatReducer: chat
});

export default rootReducer;
