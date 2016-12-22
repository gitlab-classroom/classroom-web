import { createSelector } from 'reselect';

/**
 * Direct selector to the assignmentPage state domain
 */
const selectAssignmentPageDomain = () => (state) => state.get('assignmentPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AssignmentPage
 */

const selectAssignmentPage = () => createSelector(
  selectAssignmentPageDomain(),
  (substate) => substate.toJS()
);

export default selectAssignmentPage;
export {
  selectAssignmentPageDomain,
};
