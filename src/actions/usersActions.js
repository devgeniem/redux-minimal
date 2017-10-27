export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

export const createUserSuccess = user => ({
  type: CREATE_USER_SUCCESS,
  user,
});

export const createUserFail = error => ({
  type: CREATE_USER_FAIL,
  error,
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  users,
});

export const updateUserSuccess = user => ({
  type: UPDATE_USER_SUCCESS,
  user,
});

export const deleteUserSuccess = user => ({
  type: DELETE_USER_SUCCESS,
  user,
});

