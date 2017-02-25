import request from 'utils/request';
import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { FETCH_USER_DETAIL, FETCH_USER_REPOS } from './constants';
import {
  succeedFetchUserDetail,
  failedFetchUserDetail,
  succeedFetchUserRepos,
  failedFetchUserRepos,
} from './actions';

export function* fetchUser(action) {
  const url = `https://api.github.com/users/${action.payload.loginID}`;

  try {
    const rs = yield call(request, url);
    yield put(succeedFetchUserDetail(rs));
  } catch (err) {
    yield put(failedFetchUserDetail(err));
  }
}

export function* fetchUserRepos(action) {
  const url = `https://api.github.com/users/${action.payload.loginID}/repos`;

  try {
    const rs = yield call(request, url);
    yield put(succeedFetchUserRepos(rs));
  } catch (err) {
    yield put(failedFetchUserRepos(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  const watcher1 = yield takeLatest(FETCH_USER_DETAIL, fetchUser);
  const watcher2 = yield takeLatest(FETCH_USER_REPOS, fetchUserRepos);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher1);
  yield cancel(watcher2);
}

// Bootstrap sagas
export default [
  githubData,
];
