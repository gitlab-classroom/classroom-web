import React from 'react';
import { FormattedMessage } from 'react-intl';
import { take, put } from 'redux-saga/effects';
import { actions } from './actions';
import messages from './messages';

function* catchFailedActions() {
  while (1) {
    const action = yield take();
    if (action.type.endsWith('_FAILED')) {
      yield put(actions.open(<FormattedMessage {...messages.serverError} />));
    }
  }
}

export default [
  catchFailedActions,
];
