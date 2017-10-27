import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import usersReducer from './usersReducer';
import authenticationReducer from './authReducer';
import routerReducer from './routerReducer';

// main reducers
console.log('before', Immutable);
const StateRecord = Immutable.Record({
  users: {
    all: [],
  },
});

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  users: usersReducer,
  authentication: authenticationReducer,
}, StateRecord);
