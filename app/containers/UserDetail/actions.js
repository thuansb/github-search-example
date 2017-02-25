import {
  FETCH_USER_DETAIL,
  SUCCEED_FETCH_USER_DETAIL,
  FAILED_FETCH_USER_DETAIL,
  FETCH_USER_REPOS,
  FAILED_FETCH_USER_REPOS,
  SUCCEED_FETCH_USER_REPOS,
} from './constants';

export function fetchUserDetail(loginID) {
  return {
    type: FETCH_USER_DETAIL,
    payload: {
      loginID,
    },
  };
}

export function succeedFetchUserDetail(info) {
  return {
    type: SUCCEED_FETCH_USER_DETAIL,
    payload: {
      info,
    },
  };
}

export function failedFetchUserDetail(err) {
  return {
    type: FAILED_FETCH_USER_DETAIL,
    payload: {
      err,
    },
  };
}

export function fetchUserRepos(loginID) {
  return {
    type: FETCH_USER_REPOS,
    payload: {
      loginID,
    },
  };
}

export function succeedFetchUserRepos(repos) {
  return {
    type: SUCCEED_FETCH_USER_REPOS,
    payload: {
      repos,
    },
  };
}

export function failedFetchUserRepos(err) {
  return {
    type: FAILED_FETCH_USER_REPOS,
    payload: {
      err,
    },
  };
}
