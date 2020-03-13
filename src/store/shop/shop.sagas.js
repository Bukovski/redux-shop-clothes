import { takeLatest, call, put, all } from 'redux-saga/effects';

import { convertCollectionsSnapshotToMap, firestore } from "firebase/firebase.utils";

import ShopActionTypes from './shop.types';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from "./shop.actions";


export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart),
  ])
}
