import { sagas as sessionSagas } from './session';
import { sagas as classSagas } from './class';

export default [
  ...sessionSagas,
  ...classSagas,
];
