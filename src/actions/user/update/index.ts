/* local imports: common */
import * as types from './../types';

/* initial action */
export interface UpdateUserAction {
	type: typeof types.UPDATE_USER;
	payload: UserUpdateSchema;
}

export const updateUser = (user: UserUpdateSchema): UpdateUserAction => ({
	type: types.UPDATE_USER,
	payload: user,
});

/* on success action */
export interface UpdateUserOnSuccessAction {
	type: typeof types.UPDATE_USER_ON_SUCCESS;
	payload: UserType;
}

export const updateUserOnSuccess = (user: UserType): UpdateUserOnSuccessAction => ({
	type: types.UPDATE_USER_ON_SUCCESS,
	payload: user,
});

/* on fail action */
export interface UpdateUserOnFailAction {
	type: typeof types.UPDATE_USER_ON_FAIL;
	payload: string;
	error: boolean;
}

export const updateUserOnFail = (error: string): UpdateUserOnFailAction => ({
	type: types.UPDATE_USER_ON_FAIL,
	payload: error,
	error: true,
});
