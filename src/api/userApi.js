import Axios from 'axios';
import { browserHistory } from 'react-router';
import * as userActions from '../actions/users';

const API = 'http://localhost:8080/user/';
const uploadAPI = 'http://localhost:8080/upload/';

export const updateUser = (user) => {
  return (dispatch) => {
    return Axios.post(API, user)
      .then((response) => {
        dispatch(userActions.updateUserSuccess(response.data));
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
  };
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

export const uploadAvatar = (file) => {
  return (dispatch) => {
    return Axios.get(uploadAPI, file)
      .then((response) => {
        dispatch(userActions.avatarUploadSuccess(response.data));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
}
