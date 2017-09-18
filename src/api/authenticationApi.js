import Axios from 'axios';
import {browserHistory} from 'react-router';
import * as authenticationActions from '../actions/authentication';
import * as userActions from '../actions/users';


export const login = (user) => {
  return (dispatch) => {
    return Axios.post('http://localhost:8080/login', user)
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

export const getSession = () => {
  return (dispatch) => {
    return Axios.get('http://localhost:8080/session')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}
