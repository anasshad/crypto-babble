import firebase from "firebase";
import rsf from "../firebase";

import { takeLatest } from "redux-saga";
import { take, put, call, all, takeEvery, fork } from "redux-saga/lib/effects";

import {
  syncMessages,
  failedMessages,
  getMessages,
  ADD_MESSAGE,
  SYNC_MESSAGES,
  MESSAGES_SUBSCRIBE,
  GET_MESSAGES,
  getMessagesSuccess
} from "../actions/Chat";

const messagesRef = firebase.database().ref("messages");

function* syncMessagesSaga() {
  const channel = rsf.firestore.channel("messages");

  while (true) {
    const messages = yield take(channel);
    let messagesArray = [];
    messages.forEach(function(message) {
      messagesArray.push(message.data());
    });
    yield put(syncMessages(messagesArray));
  }
}

function* addMessageSaga(m) {
  const { message } = m;
  try {
    const doc = yield call(rsf.firestore.addDocument, "messages", message);
  } catch (error) {
    console.log(error);
  }
}

function* getMessagesSaga() {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, "messages");
    let messages;
    snapshot.forEach(message => {
      messages = {
        ...messages,
        [message.id]: message.data()
      };
    });

    yield put(getMessagesSuccess(messages));
  } catch (error) {
    console.log(error);
  }
}

export default function* chatWatcherSaga() {
  yield all([
    call(syncMessagesSaga),
    takeLatest(GET_MESSAGES, getMessagesSaga),
    takeEvery(ADD_MESSAGE, addMessageSaga)
  ]);
}
