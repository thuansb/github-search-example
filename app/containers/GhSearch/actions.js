/*
 *
 * GhSearch actions
 *
 */

import {
  SEARCH_USER,
  SUCCEED_SEARCH_USER,
  FAILED,
} from './constants';

export function searchUser(searchTerm) {
  return {
    type: SEARCH_USER,
    payload: {
      searchTerm,
    },
  };
}

export function succeedSearchUser(rs) {
  return {
    type: SUCCEED_SEARCH_USER,
    payload: {
      rs,
    },
  };
}

export function failedSearchUser(err) {
  return {
    type: FAILED,
    payload: {
      err,
    },
  };
}
