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
import { router } from "./router";

import App from './components/App';
import Home from './components/Home';
import UserEdit from './components/UserEdit';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    { router }
  </Provider>
  , document.getElementById('app'));
