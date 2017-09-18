import Axios from 'axios';
import {browserHistory} from 'react-router';
import * as userActions from '../actions/users';

const baseURL = 'http://localhost:8080';
const uploadAPI = `${baseURL}/upload`;
const API = `${baseURL}/user/`;


export const updateUser = (user) => {
  return (dispatch) => {
    console.log('updating', user)
    return Axios.post(`${API}${user.id}/`, user)
      .then((response) => {
        dispatch(userActions.updateUserSuccess(response.data));
        browserHistory.push('/');
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
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

export const uploadAvatar = (file, user) => {
  return (dispatch) => {

    if (!file) throw new Error('File is missing');
    if (!user) throw new Error('User is missing');

    const data = new FormData();

    data.append('file', file);
    data.append('name', `avatar-${user.id}`);

    return Axios.post(uploadAPI, data, {
      headers: {
        'Content-Type': 'multipart/form-data; boundary=-',
      },
    })
      .then((response) => {
        const avatarUrl = `${baseURL}/${response.data[0].path}/`;
        const obj = {
          avatarUrl,
          user,
        };
        dispatch(userActions.avatarUploadSuccess(obj));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
}
