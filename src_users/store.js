import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import freeze from 'redux-freeze';
import createSagaMiddleware from 'redux-saga';
import { reducers } from './reducers/index';
import { sagas } from './sagas/index';

// add the middlewares
const middlewares = [];

// add the router middleware
const browserHistory = createHistory();
const browserHistoryMiddleware = routerMiddleware(browserHistory);

middlewares.push(browserHistoryMiddleware);

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}
// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(reducers, middleware);
sagaMiddleware.run(sagas);

// export
export { store };
