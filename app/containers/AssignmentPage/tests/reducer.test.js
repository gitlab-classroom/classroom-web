import expect from 'expect';
import assignmentPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('assignmentPageReducer', () => {
  it('returns the initial state', () => {
    expect(assignmentPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
