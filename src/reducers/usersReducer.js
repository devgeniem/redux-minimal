import Immutable from 'immutable';
import {
  FETCH_USERS_SUCCESS,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
} from '../actions/usersActions';

const initialState = Immutable.fromJS({
  all: [],
});

export default function users(state = initialState, action) {
  switch (action.type) {
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        all: state.all.filter(
          user => parseInt(user.id, 10) !== parseInt(action.user.id, 10)),
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        all: state.all.map(
          user => (user.id === action.user.id ? action.user : user),
        ),
      };
    case CREATE_USER_SUCCESS:
      return state;
    case CREATE_USER_FAIL:
      return { ...state, error: action.error.response.data.error.message };
    case
    FETCH_USERS_SUCCESS:
      return { ...state, all: action.users };
    default:
      return state;
  }
}
