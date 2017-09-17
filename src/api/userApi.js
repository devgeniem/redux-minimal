import Axios from 'axios';
import { browserHistory } from 'react-router';
import * as userActions from '../actions/users';

const API = 'http://localhost:8080/user/';

export const updateUser = (user) => {
  return (dispatch) => {
    return Axios.put(API, user)
      .then((response) => {
        dispatch(userActions.updateUserSuccess(response.data));
        browserHistory.push('/');
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
};


export const createUser = (user) => {
  return (dispatch) => {
    return Axios.post(API, user)
      .then((response) => {
        dispatch(userActions.createUserSuccess(response.data));
        browserHistory.push('/');
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
};

export const deleteUser = (userId) => {
  return (dispatch) => {
    return Axios.delete(API + userId)
      .then((response) => {
        dispatch(userActions.deleteUserSuccess(response.data));
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
};

export const fetchUsers = () => {
  return (dispatch) => {
    return Axios.get(API)
      .then((response) => {
        dispatch(userActions.fetchUsersSuccess(response.data));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
}
