import expect from 'expect';
import classesPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('classesPageReducer', () => {
  it('returns the initial state', () => {
    expect(classesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
