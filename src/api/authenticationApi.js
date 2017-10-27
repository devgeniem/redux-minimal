import Axios from 'axios';
import { browserHistory } from 'react-router';
import * as authActions from '../actions/authActions';
import * as userActions from '../actions/usersActions';

import { fetchUsers } from './userApi';

export const login = (mappedUser) => {
  const user = mappedUser.toJS();
  return dispatch => Axios.post('http://localhost:8080/login', user).then((response) => {
    dispatch(authActions.loginSuccess(response.data));
    dispatch(fetchUsers());
    localStorage.setItem('loggedIn', response.data.loggedIn);
    browserHistory.push('/');
  }).catch((error) => {
    dispatch(authActions.loginFail(error));
  });
};

export const register = (userMap) => {
  const user = userMap.toJS();
  return dispatch => Axios.post('http://localhost:8080/register', user)
    .then((response) => {
      dispatch(userActions.createUserSuccess(response.data));
      browserHistory.push('/login');
    })
    .catch((error) => {
      dispatch(userActions.createUserFail(error));
    });
};

export const logout = () => dispatch => Axios.post('http://localhost:8080/logout', null, {
  withCredentials: true,
}).then((response) => {
  localStorage.removeItem('loggedIn');
  dispatch(authActions.logoutSuccess(response.data));
  browserHistory.push('/login');
}).catch((error) => {
  throw new Error(error);
});
