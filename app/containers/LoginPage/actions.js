/*
 *
 * LoginPage actions
 *
 */

import define from '../../utils/defineActionReducerSagas';
import api from '../../utils/api';

const { actions, reducer, sagas } = define('loginPage/', {
  token: '',
}, {

  testLogin: {
    request: () => api.get('/users/me'),
  },

});

export { actions, reducer, sagas };
