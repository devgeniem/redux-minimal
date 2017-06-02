export const USERS_ADD_SAVE    = 'USERS_ADD_SAVE';
export const USERS_DELETE_SAVE = 'USERS_DELETE_SAVE';
export const USERS_EDIT_SAVE   = 'USERS_EDIT_SAVE';
export const USERS_LIST_SAVE   = 'USERS_LIST_SAVE';

// Sagas
export const USERS_ADD_EDIT    = 'USERS_ADD_EDIT';
export const USERS_DELETE      = 'USERS_DELETE';
export const USERS_FETCH_LIST  = 'USERS_FETCH_LIST';

export function addUserSave(user) {
  return {
    type: USERS_ADD_SAVE,
    user: user
  };
}

export function deleteUserSave(userID) {
  return {
    type: USERS_DELETE_SAVE,
    user_id: user_id
  };
}

export function editUserSave(user) {
  return {
    type: USERS_EDIT_SAVE,
    user: user
  };
}

export function listUserSave(user) {
  return {
    type: USERS_LIST_SAVE,
    users: users
  };
}

export function usersFetchList() {
  return {
    type: USERS_FETCH_LIST
  };
}

export function usersDelete(user_id) {
  return {
    type: USERS_DELETE,
    user_id: user_id
  };
}

export function usersAddEdit(user) {
  return {
    type: USERS_ADD_EDIT,
    user: user
  };
}