/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import * as actions from 'actions/tasks';
import { services } from 'config/services';

export function* fetchWorker({ payload }: TAction<TasksSearchType>) {
	// yield put(uiActions.startTasksFetching());

	try {
		if (!payload) throw new Error('no payload found');

		const response = yield call(services.api.tasks.search, payload);
		const tasks = yield call(response);

		yield put(actions.fetchTasksOnSuccess(tasks));
	} catch (e) {
		yield put(actions.fetchTasksOnFail(e.message));
	} finally {
		// yield put(uiActions.stopTasksFetching());
	}
}
