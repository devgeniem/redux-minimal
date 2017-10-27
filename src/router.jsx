import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from './store';
import App from './containers/App/App';
import Home from './containers/Home/Home';
import NotFound from './components/NotFound';
import UserPage from './containers/UserPage/UserPage';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

const checkAuth = (nextState, replace) => {
  const authenticated = localStorage.getItem('loggedIn');
  if (!authenticated) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};


// build the router
export default (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} onEnter={checkAuth} />
      <Route path="user(/:id)" component={UserPage} onEnter={checkAuth} />
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />

      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
