import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';
import { reducers } from "./reducers/index";

import App from './components/App';
import Home from './components/Home';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home}>
        </Route>
      </div>
    </Router>
  </Provider>
  , document.getElementById('app'));
