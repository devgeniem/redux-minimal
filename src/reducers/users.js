import {
  FETCH_USERS_SUCCESS,
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  AVATAR_UPLOAD_SUCCESS
} from '../actions/users';


const initialState = { users: [] };

export default function users(state = initialState, action) {
  switch (action.type) {
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(user => parseInt(user.id, 10) !== parseInt(action.user.id, 10)),
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.user.id) ? action.user : user),
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case AVATAR_UPLOAD_SUCCESS:

      const current = state.users.find(user => Number(user.id) === Number(action.obj.user.id));
      const updatedUser = Object.assign({}, current);
      updatedUser.avatarlUrl = action.obj.avatarUrl;

      return {
        ...state,
        users: state.users.map((user) => (user.id === updatedUser.id) ? updatedUser : user),
      };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: [...action.users] };
    default:
      return state;
  }
}
