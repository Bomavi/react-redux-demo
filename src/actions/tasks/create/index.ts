/* local imports: common */
import * as types from './../types';

/* initial action */
export interface CreateTaskAction {
	type: typeof types.CREATE_TASK;
	payload: TaskUpdateSchema;
}

export const createTask = (task: TaskUpdateSchema): CreateTaskAction => ({
	type: types.CREATE_TASK,
	payload: task,
});

/* on success action */
export interface CreateTaskOnSuccessAction {
	type: typeof types.CREATE_TASK_ON_SUCCESS;
	payload: TaskType;
}

export const createTaskOnSuccess = (task: TaskType): CreateTaskOnSuccessAction => ({
	type: types.CREATE_TASK_ON_SUCCESS,
	payload: task,
});

/* on fail action */
export interface CreateTaskOnFailAction {
	type: typeof types.CREATE_TASK_ON_FAIL;
	payload: string;
	error: boolean;
}

export const createTaskOnFail = (error: string): CreateTaskOnFailAction => ({
	type: types.CREATE_TASK_ON_FAIL,
	payload: error,
	error: true,
});
