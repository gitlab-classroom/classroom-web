import React from 'react';
import { FormattedMessage } from 'react-intl';
import { take, put } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { actions } from './actions';
import messages from './messages';

function* catchFailedActions() {
  while (1) {
    const action = yield take();
    if (action.type.endsWith('_FAILED')) {
      if (action.error.status === 401) {
        // Login Required
        browserHistory.push('/login');
        yield put(actions.open(<FormattedMessage {...messages.loginRequired} />));
        continue;
      }
      if (action.error.error && action.error.error.message ===
          'Request validation failed: Parameter (Cookie) is required') {
        browserHistory.push('/login');
        yield put(actions.open(<FormattedMessage {...messages.loginRequired} />));
        continue;
      }
      yield put(actions.open(<FormattedMessage {...messages.serverError} />));
    }
  }
}

export default [
  catchFailedActions,
];
