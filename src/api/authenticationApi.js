import Axios from 'axios';
import {browserHistory} from 'react-router';
import * as authenticationActions from '../actions/authentication';
import * as userActions from '../actions/users';

const baseURL = 'http://localhost:8080';

export const login = (user) => {
  return (dispatch) => {
    return Axios.post(`${baseURL}/login`, user).then((response) => {
      dispatch(authenticationActions.loginSuccess(response.data));
      browserHistory.push('/');
    }).catch((error) => {
      throw new Error(error);
    });
  };
};

export const register = (user) => {
  return (dispatch) => {
    return Axios.post(`${baseURL}/register`, user).then((response) => {
      dispatch(userActions.createUserSuccess(response.data));
      browserHistory.push('/login');
    }).catch((error) => {
      throw new Error(error);
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return Axios.post(`${baseURL}/logout`, null, {
      withCredentials: true,
    }).then((response) => {

      dispatch(authenticationActions.logoutSuccess(response.data));

      browserHistory.push('/login');
    }).catch((error) => {

      throw new Error(error);
    });
  };
};
