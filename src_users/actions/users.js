export const USERS_ADD_SAVE    = 'USERS_ADD_SAVE';
export const USERS_DELETE_SAVE = 'USERS_DELETE_SAVE';
export const USERS_EDIT_SAVE   = 'USERS_EDIT_SAVE';
export const USERS_LIST_SAVE   = 'USERS_LIST_SAVE';

// Sagas
export const USERS_ADD_EDIT    = 'USERS_ADD_EDIT';
export const USERS_DELETE      = 'USERS_DELETE';
export const USERS_FETCH_LIST  = 'USERS_FETCH_LIST';

/**
 * Action that saves new user to store.
 * @param User object
 */
export function addUserSave(user) {
  return {
    type: USERS_ADD_SAVE,
    user: user
  };
}

/**
 * Action that deletes user by given id from store.
 * @param User id
 */
export function deleteUserSave(user_id) {
  return {
    type: USERS_DELETE_SAVE,
    user_id: user_id
  };
}

/**
 * Action that saves edits on user to store.
 * @param User object
 */
export function editUserSave(user) {
  return {
    type: USERS_EDIT_SAVE,
    user: user
  };
}

/**
 * Action that saves users to store.
 * @param User object
 */
export function listUserSave(user) {
  return {
    type: USERS_LIST_SAVE,
    users: users
  };
}

/**
 * Saga that fetches users from backend and calls listUserSave.
 */
export function usersFetchList() {
  return {
    type: USERS_FETCH_LIST
  };
}

/**
 * Saga that deletes user from backend and calls deleteUserSave.
 * @param User id
 */
export function usersDelete(user_id) {
  return {
    type: USERS_DELETE,
    user_id: user_id
  };
}

/**
 * Saga that adds or edits a user to backend and calls either addUserSave or editUserSave.
 * @param User object
 */
export function usersAddEdit(user) {
  return {
    type: USERS_ADD_EDIT,
    user: user
  };
}