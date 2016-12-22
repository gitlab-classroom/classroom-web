import define from '../utils/defineActionReducerSagas';
import api from '../utils/api';

const { actions, reducer, sagas } = define('class/', {
}, {

  getList: {
    request: () => api.get('/classes'),
    success: (state, action) => {
      const newClasses = {};
      action.data.forEach((c) => { newClasses[c.id] = c; });
      return state.merge(newClasses);
    },
  },

});

export { actions, reducer, sagas };

