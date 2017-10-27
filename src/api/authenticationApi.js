import Axios from 'axios';
import { browserHistory } from 'react-router';
import * as authActions from '../actions/authActions';
import * as userActions from '../actions/usersActions';

import { fetchUsers } from './userApi';

export const login = (mappedUser) => {
  const user = mappedUser.toJS();
  return (dispatch) => {
    return Axios.post('http://localhost:8080/login', user).then((res) => {
      dispatch(authActions.loginSuccess(res.data));
      dispatch(fetchUsers());
      localStorage.setItem('loggedIn', res.data.loggedIn);
      browserHistory.push('/');
    }).catch((error) => {
      dispatch(authActions.loginFail(error));
    });
  };
};

export const register = (userMap) => {
  const user = userMap.toJS();
  return (dispatch) => {
    return Axios.post('http://localhost:8080/register', user).then((res) => {
      dispatch(userActions.createUserSuccess(res.data));
      browserHistory.push('/login');
    }).
      catch((error) => {
        dispatch(userActions.createUserFail(error));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    return Axios.post('http://localhost:8080/logout', null, {
      withCredentials: true,
    }).then((res) => {
      localStorage.removeItem('loggedIn');
      dispatch(authActions.logoutSuccess(res.data));
      browserHistory.push('/login');
    }).catch((error) => {
      throw new Error(error);
    });
  };
};

export const getSession = () => {
  return (dispatch) => {
    return Axios.post('http://localhost:8080/session', null, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  };
};
