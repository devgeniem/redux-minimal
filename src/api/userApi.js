import Axios from 'axios';
import {browserHistory} from 'react-router';
import * as userActions from '../actions/users';

const baseURL = 'http://localhost:8080';
const API = `${baseURL}/user/`;

export const updateUser = (user) => {
  return (dispatch) => {
    const {name, profilePic, id} = user;
    const formData = new FormData();

    if (name) formData.append('name', name);
    if (profilePic) formData.append('url', profilePic);

    return Axios.post(`${API}${id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data; boundary=-',
      },
    }).then((response) => {
      dispatch(userActions.updateUserSuccess(response.data));
      browserHistory.push('/');
    }).catch((error) => {
      throw new Error(error);
    });
  };
};

export const deleteUser = (userId) => {
  return (dispatch) => {
    return Axios.delete(API + userId).then((response) => {
      dispatch(userActions.deleteUserSuccess(response.data));
    }).catch((error) => {
      throw new Error(error);
    });
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    return Axios.get(API).then((response) => {
      dispatch(userActions.fetchUsersSuccess(response.data));
    }).catch((error) => {
      throw new Error(error);
    });
  };
};
