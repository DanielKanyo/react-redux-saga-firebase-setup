import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as TYPES from '../Actions/actionTypes';

import { getFirestore } from 'redux-firestore';

export function* fetchList() {
  const firestore = getFirestore();
  const payload = [];

  try {
    const snapshot = yield call(firestore.get, 'items');

    snapshot.forEach(item => {
      payload.push(item.data());
    });

    yield put({
      type: TYPES.RENDER_LIST,
      payload
    });
  } catch (error) {
    console.log(error);
  }
}

export function* addItem({ payload }) {
  const firestore = getFirestore();
  
  try {
    yield call(firestore.add, 'items', { ...payload });

    yield put({
      type: TYPES.ADD_ITEM_SUCCESS,
      payload
    });
  } catch (error) {
    yield put({
      type: TYPES.ADD_ITEM_FAILED,
      error
    });
  }
}

export function* watchLoadList() {
  yield takeEvery(TYPES.LOAD_LIST, fetchList);
}

export function* watchAddItem() {
  yield takeEvery(TYPES.ADD_ITEM, addItem);
}

export default function* rootSaga() {
  yield all([
    watchLoadList(),
    watchAddItem()
  ]);
}