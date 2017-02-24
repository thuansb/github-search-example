/*
*
* GhSearch reducer
*
*/

import { fromJS } from 'immutable';
import {
  SUCCEED_SEARCH_USER,
  FAILED_SEARCH_USER,
} from './constants';

const initialState = fromJS({
  searchResult: {},
});

function ghSearchReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCEED_SEARCH_USER:
      return state.set('searchResult', action.payload.rs);
    case FAILED_SEARCH_USER:
      return state.set('error', action.payload.err);
    default:
      return state;
  }
}

export default ghSearchReducer;