export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
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


export const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    user,
  };
};
