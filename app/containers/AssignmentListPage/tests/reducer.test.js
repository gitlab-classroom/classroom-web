import expect from 'expect';
import assignmentListPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('assignmentListPageReducer', () => {
  it('returns the initial state', () => {
    expect(assignmentListPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
