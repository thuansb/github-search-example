import { createSelector } from 'reselect';

/**
 * Direct selector to the ghSearch state domain
 */
const selectGhSearchDomain = () => (state) => state.get('ghSearch');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GhSearch
 */

const makeSelectGhSearch = () => createSelector(
  selectGhSearchDomain(),
  (substate) => substate.toJS()
);

export default makeSelectGhSearch;
export {
  selectGhSearchDomain,
};
