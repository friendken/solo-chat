import { takeEvery, put, call } from 'redux-saga/effects';
import { get } from 'lodash';
import moment from 'moment';
import axios from 'axios';
import {
  CHAT_SEND_MESSAGE,
  CHAT_SEND_MESSAGE_SUCCESS,
  CHAT_SEND_MESSAGE_ERROR,
  CHAT_SEND_MESSAGE_DISABLED,
} from '../../reducers/chat/chatReducer';
import { COMMAND, getFirstWord } from '../../utils/utils';

function* sendNormalMessage(payload) {
  try {
    const firstLetter = payload.message.substring(0, 1);

    if (firstLetter === '/') {
      const firstWord = getFirstWord(payload.message);
      yield put({ type: CHAT_SEND_MESSAGE_ERROR, error: `COMMAND "${firstWord}" not found` });
    } else {
      yield put({
        type: CHAT_SEND_MESSAGE_SUCCESS,
        message: {
          ...payload,
          createdAt: new Date(),
        },
      });
    }
  } catch (error) {
    yield put({ type: CHAT_SEND_MESSAGE_ERROR, error: error.message });
  }
}
function* sendTimeCommand() {
  try {
    yield put({
      type: CHAT_SEND_MESSAGE_SUCCESS,
      message: { from: 'robo', message: moment().format('MMMM Do YYYY, h:mm:ss a') },
    });
  } catch (error) {
    yield put({ type: CHAT_SEND_MESSAGE_ERROR, error: error.message });
  }
}

function* sendStarwarsCommand({ message }) {
  const transform = message.split(' ');
  transform.shift();
  const queryString = transform.join(' ');
  try {
    const response = yield call(axios.get, `https://swapi.co/api/people/?search=${queryString}`);
    const results = get(response, 'data.results', []);
    if (results.length === 0) {
      yield put({
        type: CHAT_SEND_MESSAGE_SUCCESS,
        message: { from: 'robo', message: `Sorry! ${queryString} character not found` },
      });
    } else {
      const character = results[0];
      const detail = `
        <div><label>Name: </label><span>${character.name}</span></div>
        <div><label>Height: </label><span>${character.height}</span></div>
        <div><label>Birth: </label><span>${character.birth_year}</span></div>
        <div><label>Gender: </label><span>${character.gender}</span></div>
        <div><label>Mass: </label><span>${character.mass}</span></div>
      `;
      yield put({
        type: CHAT_SEND_MESSAGE_SUCCESS,
        message: { from: 'robo', message: detail },
      });
    }
  } catch (error) {
    yield put({ type: CHAT_SEND_MESSAGE_ERROR, error: error.message });
  }
}

function* sendGoodbyCommand() {
  try {
    yield put({ type: CHAT_SEND_MESSAGE_SUCCESS, message: { from: 'robo', message: 'see you later' } });
    yield put({ type: CHAT_SEND_MESSAGE_DISABLED });
  } catch (error) {
    yield put({ type: CHAT_SEND_MESSAGE_ERROR, error: error.message });
  }
}

function* handleMessage({ payload }) {
  const firstWord = getFirstWord(payload.message);

  // please be carefull the order index is corresponding with the COMMAND enums constant
  switch (COMMAND.indexOf(firstWord)) {
    case 0:
      yield call(sendTimeCommand, payload);
      break;
    case 1:
      yield call(sendStarwarsCommand, payload);
      break;
    case 2:
      yield call(sendGoodbyCommand, payload);
      break;
    default:
      yield call(sendNormalMessage, payload);
      break;
  }
}

export default function* chatSaga() {
  yield takeEvery(CHAT_SEND_MESSAGE, handleMessage);
}
