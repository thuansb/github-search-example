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
  repoLoading: false,
  detailLoading: false,
});

function userDetailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_DETAIL:
      return state.set('err', null)
                  .set('detailLoading', true);
    case FETCH_USER_REPOS:
      return state.set('err', null)
                  .set('repoLoading', true);
    case SUCCEED_FETCH_USER_DETAIL:
      return state.set('info', fromJS(action.payload.info))
                  .set('detailLoading', false);
    case FAILED_FETCH_USER_DETAIL:
      return state.set('err', fromJS(action.payload.err))
                  .set('detailLoading', false);
    case SUCCEED_FETCH_USER_REPOS:
      return state.set('repos', fromJS(action.payload.repos))
                  .set('repoLoading', false);
    case FAILED_FETCH_USER_REPOS:
      return state.set('err', fromJS(action.payload.err))
                  .set('repoLoading', false);
    default:
      return state;
  }
}

export default userDetailReducer;
