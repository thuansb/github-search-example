import request from 'utils/request';
import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { FETCH_USER_DETAIL } from './constants';
import { succeedFetchUserDetail, failedFetchUserDetail } from './actions';


/**
 * Github repos request/response handler
 */
export function* fetchUser(action) {
  const url = `https://api.github.com/users/${action.payload.loginID}`;

  try {
    const rs = yield call(request, url);
    yield put(succeedFetchUserDetail(rs));
  } catch (err) {
    yield put(failedFetchUserDetail(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  const watcher = yield takeLatest(FETCH_USER_DETAIL, fetchUser);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  githubData,
];
