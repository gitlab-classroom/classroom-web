import { take } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { actions as sessionActions } from '../../apis/session';

// Individual exports for testing
export function* handleLoginSuccess() {
  while (1) {
    yield take(sessionActions.loginSuccess.type);
    browserHistory.push('/classes');
  }
}

// All sagas to be loaded
export default [
  handleLoginSuccess,
];
