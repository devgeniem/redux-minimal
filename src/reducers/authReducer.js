import Immutable from 'immutable';

import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
} from '../actions/authActions';
const initialState = Immutable.fromJS({});

export default function authentication(state = initialState, action) {
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
