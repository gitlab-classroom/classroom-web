import { createSelector } from 'reselect';

/**
 * Direct selector to the assignmentListPage state domain
 */
const selectAssignmentListPageDomain = () => (state) => state.get('assignmentListPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AssignmentListPage
 */

const selectAssignmentListPage = () => createSelector(
  selectAssignmentListPageDomain(),
  (substate) => substate.toJS()
);

export default selectAssignmentListPage;
export {
  selectAssignmentListPageDomain,
};
