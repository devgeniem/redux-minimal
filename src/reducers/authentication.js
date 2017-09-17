import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../actions/authentication';

export default function authentication(state = {}, action) {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return { ...state, user: action.user };
    case LOGIN_SUCCESS:
      return { ...state, user: action.user };
    default:
      return state;
  }
}
