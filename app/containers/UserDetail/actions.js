import {
  FETCH_USER_DETAIL,
  SUCCEED_FETCH_USER_DETAIL,
  FAILED_FETCH_USER_DETAIL,
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
