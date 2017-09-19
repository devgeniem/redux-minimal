import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
} from '../actions/authentication';

export default function authentication(state = {}, action) {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return state;
    case LOGIN_SUCCESS:
      return state;
    case REGISTER_SUCCESS:
      return state;
    default:
      return state;
  }
};
