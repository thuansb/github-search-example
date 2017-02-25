import { fromJS } from 'immutable';
import {
  FETCH_USER_DETAIL,
  SUCCEED_FETCH_USER_DETAIL,
  FAILED_FETCH_USER_DETAIL,
} from './constants';

const initialState = fromJS({
  info: {},
});

function userDetailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_DETAIL:
      return state;
    case SUCCEED_FETCH_USER_DETAIL:
      return state.set('info', action.payload.info);
    case FAILED_FETCH_USER_DETAIL:
      return state.set('err', action.payload.err);
    default:
      return state;
  }
}

export default userDetailReducer;
