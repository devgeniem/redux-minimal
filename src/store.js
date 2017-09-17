import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import logger from 'redux-logger';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import freeze from 'redux-freeze';
import { reducers } from './reducers/index';

// add the middlewares
const middlewareArr = [];

// add the router middleware
middlewareArr.push(routerMiddleware(browserHistory));
middlewareArr.push(thunk);



// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewareArr.push(freeze);
}

// apply the middleware
let middleware = compose(applyMiddleware(...middlewareArr));
let initialState = {
  users: [],
};
// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(reducers, initialState, middleware);
const history = syncHistoryWithStore(browserHistory, store);

// export
export { store, history };

