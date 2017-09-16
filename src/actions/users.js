import Axios from 'axios';
import { browserHistory } from 'react-router'

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

export const FETCH_USERS = 'FETCH_USERS';
export const UPDATE_USER = 'UPDATE_USER';
export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';

const API = 'http://localhost:8080/user/';

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    users,
  };
};

export const createUserSuccess = (user) => {
  return {
    type: CREATE_USER_SUCCESS,
    user,
  };
};

export const updateUserSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    user,
  };
};

export const deleteUserSuccess = (user) => {
  return {
    type: DELETE_USER_SUCCESS,
    user,
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    return Axios.put(API, user)
      .then((response) => {
        dispatch(updateUserSuccess(response.data));
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
        dispatch(createUserSuccess(response.data));
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
        dispatch(deleteUserSuccess(response.data));
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
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
}

