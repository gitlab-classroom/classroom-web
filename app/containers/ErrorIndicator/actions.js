/*
 *
 * ErrorIndicator actions
 *
 */

import define from '../../utils/defineActionReducerSagas';

const { actions, reducer } = define('ErrorIndicator/', {
  open: false,
  errorMessage: '',
}, {

  open: (state, action) => state
    .set('open', true)
    .set('errorMessage', action.data),

  close: (state) => state
    .set('open', false),
});

export { actions, reducer };
