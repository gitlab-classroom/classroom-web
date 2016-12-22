import { take, put } from 'redux-saga/effects';
import define from '../utils/defineActionReducerSagas';
import api from '../utils/api';

import { actions as assignmentActions } from './assignment';

// eslint-disable-next-line
let { actions, reducer, sagas } = define('class/', {
}, {

  getList: {
    request: () => api.get('/classes'),
    success: (state, action) => {
      const newClasses = {};
      action.data.forEach((c) => { newClasses[c.id] = c; });
      return state.merge(newClasses);
    },
  },

  getOneInfo: {
    request: (action) => api.get(`/classes/${action.data}`),
    success: (state, action) => {
      const classId = `${action.requestData}`;
      const classInfo = action.data;
      delete classInfo.assignments;
      return state.mergeDeep({
        [classId]: classInfo,
      });
    },
  },

  getAssignments: {
    request: (action) => api.get(`/classes/${action.data}/assignments`),
    success: (state, action) => {
      const classId = `${action.requestData}`;
      const { role, assignments } = action.data;
      const assignmentIds = assignments.map((a) => `${a.id}`);
      return state
        .setIn([classId, 'role'], role)
        .setIn([classId, 'assignmentIds'], assignmentIds);
    },
  },

});

function* getAssignmentsSuccess() {
  while (1) {
    const action = yield take(actions.getAssignmentsSuccess.type);
    yield put(assignmentActions.getAssignmentsSuccess(action.data.assignments));
  }
}

sagas = [getAssignmentsSuccess, ...sagas];

export { actions, reducer, sagas };

