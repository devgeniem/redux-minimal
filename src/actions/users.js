export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const AVATAR_UPLOAD_SUCCESS = 'AVATAR_UPLOAD_SUCCESS';
export const AVATAR_LOADED = 'AVATAR_LOADED';

export const avatarLoaded = (img) => {
  return {
    type: AVATAR_LOADED,
    img,
  }
};
export const avatarUploadSuccess = (img) => {
  return {
    type: AVATAR_UPLOAD_SUCCESS,
    img,
  };
};

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

