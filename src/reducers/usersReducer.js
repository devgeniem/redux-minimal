import Immutable from 'immutable';
import {
  FETCH_USERS_SUCCESS,
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
} from '../actions/usersActions';

const initialState = Immutable.fromJS({
  all: [],
});

export default function users(state = initialState, action) {

  switch (action.type) {
    case DELETE_USER_SUCCESS:
      console.log(action);
      return {
        ...state,
        all: state.all.filter(user => user.id !== action.user.id),
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        all: state.all.map(
          (user) => (user.id === action.user.id) ? action.user : user),
      };
    case CREATE_USER_SUCCESS:
      return state.all.push(action.user);
    case FETCH_USERS_SUCCESS:
      return { ...state, all: action.users };
    default:
      return state;
  }
};
