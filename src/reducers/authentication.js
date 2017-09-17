import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../actions/authentication';


const initialState = { users: [] };

export default function users(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return state;
    case LOGIN_SUCCESS:
      return state;
    default:
      return state;
  }
}
