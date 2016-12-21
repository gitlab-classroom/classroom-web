/*
 *
 * Header actions
 *
 */

import {
  SET_APPBAR,
} from './constants';

export function setAppbar(args) {
  return {
    type: SET_APPBAR,
    args,
  };
}
