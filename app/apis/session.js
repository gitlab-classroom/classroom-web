import define from '../utils/defineActionReducerSagas';
import api from '../utils/api';

const { actions, reducer, sagas } = define('data/', {
  token: '',
}, {

  login: {
    request: (action) => api.post('/session', {
      username: action.data.username,
      password: action.data.password,
    }),
    success: (state, action) => state.set('token', action.data.token),
  },

});

export { actions, reducer, sagas };
