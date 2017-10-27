import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import Immutable from 'immutable';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import freeze from 'redux-freeze';
import rootReducer from './reducers/index';

// Middleware
const middlewareArr = [routerMiddleware(browserHistory), thunk];
if (process.env.NODE_ENV !== 'production') {
  middlewareArr.push(freeze);
}
let middleware = compose(applyMiddleware(...middlewareArr));
// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

const initialState = Immutable.Map();
// create the store
const store = createStore(rootReducer, initialState, middleware);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS();
  },
});
// export
export { store, history };

