import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {history, store} from './store';
import App from './containers/App/App';
import Home from './containers/Home/Home';
import NotFound from './components/NotFound';
import UserPage from './containers/UserPage/UserPage';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

const checkAuth = (nextState, replace) => {
  const state = store.getState();
  const authenticated = state.authentication.user &&
    state.authentication.user.loggedIn;

  // if (!authenticated) {
  //   replace({
  //     pathname: '/login',
  //     state: {nextPathname: nextState.location.pathname},
  //   });
  // }
};

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} onEnter={checkAuth}/>
      <Route path="user(/:id)" component={UserPage} onEnter={checkAuth}/>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>

      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export {router};
