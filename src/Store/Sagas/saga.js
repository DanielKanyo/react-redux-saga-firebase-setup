import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_LIST, RENDER_LIST } from '../Actions/actions';

import { getFirestore } from 'redux-firestore';

export function* fetchList() {
  const firestore = getFirestore();
  const payload = [];

  const snapshot = yield call(firestore.get, 'items');
  
  snapshot.forEach(item => {
    payload.push(item.data());
  });

  yield put({
    type: RENDER_LIST,
    payload
  });
}

export function* loadList() {
  yield takeEvery(LOAD_LIST, fetchList);
}

export default function* rootSaga() {
  yield all([loadList()]);
}