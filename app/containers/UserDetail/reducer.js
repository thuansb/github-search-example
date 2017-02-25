import { fromJS } from 'immutable';
import {
  FETCH_USER_DETAIL,
  SUCCEED_FETCH_USER_DETAIL,
  FAILED_FETCH_USER_DETAIL,
  FETCH_USER_REPOS,
  SUCCEED_FETCH_USER_REPOS,
  FAILED_FETCH_USER_REPOS,
} from './constants';

const initialState = fromJS({
  info: {},
  repos: [],
});

function userDetailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_DETAIL:
      return state.set('err', null)
                  .set('loading', true);
    case FETCH_USER_REPOS:
      return state.set('err', null)
                  .set('loading', true);
    case SUCCEED_FETCH_USER_DETAIL:
      return state.set('info', action.payload.info);
    case FAILED_FETCH_USER_DETAIL:
      return state.set('err', action.payload.err);
    case SUCCEED_FETCH_USER_REPOS:
      return state.set('repos', action.payload.repos);
    case FAILED_FETCH_USER_REPOS:
      return state.set('err', action.payload.err);
    default:
      return state;
  }
}

export default userDetailReducer;
