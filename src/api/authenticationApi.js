import Axios from 'axios';
import { browserHistory } from 'react-router';
import * as authActions from '../actions/authActions';
import * as userActions from '../actions/usersActions';

import { fetchUsers } from './userApi';

const baseURL = 'http://localhost:8080';

export const login = (mappedUser) => {
  const user = mappedUser.toJS();
  return (dispatch) => {
    return Axios.post(`${baseURL}/login`, user).then((response) => {

      dispatch(authActions.loginSuccess(response.data));
      dispatch(fetchUsers());

      localStorage.setItem('loggedIn', response.data.loggedIn);

      browserHistory.push('/');
    }).catch((error) => {
      dispatch(authActions.loginFail(error));
    });
  };
};

export const register = (userMap) => {
  const user = userMap.toJS();
  return (dispatch) => {
    return Axios.post(`${baseURL}/register`, user).then((response) => {
      dispatch(userActions.createUserSuccess(response.data));
      browserHistory.push('/login');
    }).catch((error) => {
      console.log('CATCHCHHHH');
      dispatch(userActions.createUserFail(error));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return Axios.post(`${baseURL}/logout`, null, {
      withCredentials: true,
    }).then((response) => {
      localStorage.setItem('loggedIn', response.data.loggedIn);
      dispatch(authActions.logoutSuccess(response.data));
      browserHistory.push('/login');
    }).catch((error) => {
      localStorage.removeItem('loggedIn');

      throw new Error(error);
    });
  };
};
