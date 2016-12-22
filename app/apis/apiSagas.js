import { sagas as sessionSagas } from './session';
import { sagas as classSagas } from './class';
import { sagas as assignmentSagas } from './assignment';

export default [
  ...sessionSagas,
  ...classSagas,
  ...assignmentSagas,
];
