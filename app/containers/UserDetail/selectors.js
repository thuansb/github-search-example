import { createSelector } from 'reselect';

/**
 * Direct selector to the userDetail state domain
 */
const selectUserDetailDomain = () => (state) => state.get('userDetail');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserDetail
 */

const makeSelectUserDetail = () => createSelector(
  selectUserDetailDomain(),
  (substate) => substate.toJS()
);

export default makeSelectUserDetail;
export {
  selectUserDetailDomain,
};
