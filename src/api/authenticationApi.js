import Axios from 'axios';
import { browserHistory } from 'react-router';
import * as authenticationActions from '../actions/authentication';
import * as userActions from '../actions/users';


export const login = () => {
  return (dispatch) => {
    return Axios.post('http://localhost:8080/login')
      .then((response) => {
        dispatch(authenticationActions.loginSuccess(response.data));
        browserHistory.push('/');
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
};


export const register = (user) => {
  return (dispatch) => {
    return Axios.post('http://localhost:8080/register', user)
      .then((response) => {
        dispatch(userActions.createUserSuccess(response.data));
        browserHistory.push('/login');
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
};

export const logout = () => {
  return (dispatch) => {
    return Axios.post('http://localhost:8080/logout')
      .then((response) => {
        dispatch(authenticationActions.logoutSuccess(response.data));
        browserHistory.push('/login');
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
};
