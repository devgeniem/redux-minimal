import React from "react";
import {
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';
import App from "./containers/App/App";
import UserEdit from "./components/UserEdit/UserEdit";

// build the router
const router = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/user-edit/" component={UserEdit} />
      <Route path="/user-edit/:id" component={UserEdit} />

    </div>
  </Router>
);

// export
export { router };
