import { take, put } from 'redux-saga/effects';
import { actions as assignmentActions } from '../../apis/assignment';
import { actions as errorIndicatorActions } from '../ErrorIndicator/actions';
import { browserHistory } from 'react-router';

import messages from './messages';
import React from 'react';
import { FormattedMessage } from 'react-intl';

// Individual exports for testing
export function* defaultSaga() {
  while (1) {
    const action = yield take(assignmentActions.newAssignmentSuccess.type);
    yield put(errorIndicatorActions.open(<FormattedMessage {...messages.createSuccess} />));
    browserHistory.push(`/class/${action.requestData.id}`);
  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];
