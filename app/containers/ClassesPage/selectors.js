import { createSelector } from 'reselect';

/**
 * Direct selector to the classesPage state domain
 */
const selectClassesPageDomain = () => (state) => state.get('classesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ClassesPage
 */

const selectClassesPage = () => createSelector(
  selectClassesPageDomain(),
  (substate) => substate.toJS()
);

export default selectClassesPage;
export {
  selectClassesPageDomain,
};
