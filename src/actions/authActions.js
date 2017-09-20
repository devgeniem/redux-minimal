export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const logoutSuccess = (users) => {
  return {
    type: LOGOUT_SUCCESS,
    users,
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

export const loginFail = (response) => {
  return {
    type: LOGIN_FAIL,
    message: response,

  };
};

export const clearError = (response) => {
  return {
    type: CLEAR_ERROR,
  };
};
export const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    user,
  };
};

