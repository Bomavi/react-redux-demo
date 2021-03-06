/* local imports: common */
import * as types from './../types';

/* initial action */
export interface UpdateTaskAction {
	type: typeof types.UPDATE_TASK;
	payload: {
		id: string;
		data: TaskUpdateSchema;
	};
}

export const updateTask = (id: string, data: TaskUpdateSchema): UpdateTaskAction => ({
	type: types.UPDATE_TASK,
	payload: {
		id,
		data,
	},
});

/* on success action */
export interface UpdateTaskOnSuccessAction {
	type: typeof types.UPDATE_TASK_ON_SUCCESS;
	payload: TaskType;
}

export const updateTaskOnSuccess = (task: TaskType): UpdateTaskOnSuccessAction => ({
	type: types.UPDATE_TASK_ON_SUCCESS,
	payload: task,
});

/* on fail action */
export interface UpdateTaskOnFailAction {
	type: typeof types.UPDATE_TASK_ON_FAIL;
	payload: string;
	error: boolean;
}

export const updateTaskOnFail = (error: string): UpdateTaskOnFailAction => ({
	type: types.UPDATE_TASK_ON_FAIL,
	payload: error,
	error: true,
});
