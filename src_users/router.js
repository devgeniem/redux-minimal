import React from "react";
import { Route, Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from "./containers/App/App";
import UserEdit from "./components/UserEdit/UserEdit";
import createHistory from 'history/createBrowserHistory'

const history = createHistory();

// build the router
const router = (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/user-edit/" component={UserEdit} />
      <Route path="/user-edit/:id" component={UserEdit} />

    </div>
  </ConnectedRouter>
);

export { router };
