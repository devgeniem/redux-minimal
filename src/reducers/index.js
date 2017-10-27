import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// main reducers
export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  // your reducer here
});
