import Immutable from 'immutable';

import {
  LOGIN_SUCCESS,
  CLEAR_ERROR,
  LOGIN_FAIL,
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
    case LOGIN_FAIL:
      return { ...state, error: action.message.response.data.error.message };
    case REGISTER_SUCCESS:
      return state;
    case CLEAR_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
