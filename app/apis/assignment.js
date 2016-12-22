import define from '../utils/defineActionReducerSagas';
import api from '../utils/api';

const { actions, reducer, sagas } = define('assignment/', {
}, {

  getAssignment: {
    request: (action) => api.get(`/assignments/${action.data}`),
    success: (state, action) => state.set(action.data.id, action.data),
  },

  getAssignmentsSuccess: (state, action) => {
    const newAssignments = {};
    action.data.forEach((a) => { newAssignments[a.id] = a; });
    return state.merge(newAssignments);
  },

});

export { actions, reducer, sagas };
