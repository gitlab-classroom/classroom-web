/*
 *
 * Header reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_APPBAR,
} from './constants';

const initialState = fromJS({
  appbarArgs: {},
});

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_APPBAR:
      return state.set('appbarArgs', action.args);
    default:
      return state;
  }
}

export default headerReducer;
