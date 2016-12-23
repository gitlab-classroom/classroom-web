import { createSelector } from 'reselect';

/**
 * Direct selector to the newAssignmentPage state domain
 */
const selectNewAssignmentPageDomain = () => (state) => state.get('newAssignmentPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NewAssignmentPage
 */

const selectNewAssignmentPage = () => createSelector(
  selectNewAssignmentPageDomain(),
  (substate) => substate.toJS()
);

export default selectNewAssignmentPage;
export {
  selectNewAssignmentPageDomain,
};
