import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from './store';
import App from './containers/App/App';
import Home from './containers/Home/Home';
import NotFound from './components/NotFound';
import UserPage from './containers/UserPage/UserPage';
// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="user(/:id)" component={UserPage} />

      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export { router };
