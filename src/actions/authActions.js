export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const logoutSuccess = users => ({
  type: LOGOUT_SUCCESS,
  users,
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginFail = response => ({
  type: LOGIN_FAIL,
  message: response,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const registerSuccess = user => ({
  type: REGISTER_SUCCESS,
  user,
});

