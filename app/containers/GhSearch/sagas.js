import request from 'utils/request';
import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { SEARCH_USER } from './constants';
import { succeedSearchUser, failedSearchUser } from './actions';


/**
 * Github repos request/response handler
 */
export function* searchUser(action) {
  const url = `https://api.github.com/search/users?q=${action.payload.searchTerm}`;

  try {
    const rs = yield call(request, url);
    yield put(succeedSearchUser(rs));
  } catch (err) {
    yield put(failedSearchUser(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  const watcher = yield takeLatest(SEARCH_USER, searchUser);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  githubData,
];
