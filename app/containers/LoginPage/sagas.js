import { take, put, call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { actions as sessionActions } from '../../apis/session';
import { actions as loginPageActions } from './actions';
import { actions as errorIndicatorActions } from '../ErrorIndicator/actions';

import React from 'react';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

function* handleLoggedIn() {
  browserHistory.push('/classes');
  yield put(errorIndicatorActions.open(<FormattedMessage {...messages.loggedIn} />));
}

export function* handleLogin() {
  while (1) {
    yield take(sessionActions.loginSuccess.type);
    yield call(handleLoggedIn);
  }
}

export function* handleTestLogin() {
  while (1) {
    yield take(loginPageActions.testLoginSuccess.type);
    yield call(handleLoggedIn);
  }
}

// All sagas to be loaded
export default [
  handleLogin,
  handleTestLogin,
];
