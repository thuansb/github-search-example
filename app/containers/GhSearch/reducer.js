/*
*
* GhSearch reducer
*
*/

import { fromJS } from 'immutable';
import {
  SEARCH_USER,
  SUCCEED_SEARCH_USER,
  FAILED_SEARCH_USER,
} from './constants';

const initialState = fromJS({
  searchResult: {},
});

function ghSearchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_USER:
      return state.set('searchResult', fromJS([]));
    case SUCCEED_SEARCH_USER:
      return state.set('searchResult', fromJS(action.payload.rs));
    case FAILED_SEARCH_USER:
      return state.set('error', fromJS(action.payload.err));
    default:
      return state;
  }
}

export default ghSearchReducer;
