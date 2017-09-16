import {
  FETCH_USERS,
  UPDATE_USER,
  FETCH_USERS_SUCCESS,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS
} from '../actions/users';


const initialState = { users: [] };

export default function users(state = initialState, action) {
  switch (action.type) {
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(user => parseInt(user.id, 10) !== parseInt(action.user.id, 10)),
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.user.id) ? action.user : user),
      };
    case DELETE_USER:
      return state;
    case CREATE_USER:
      return state;
    case UPDATE_USER:
      break;
    case FETCH_USERS:
      return state;
    case FETCH_USERS_SUCCESS:
      return { ...state, users: [...action.users] };
    default:
      return state;
  }
}
