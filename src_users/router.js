import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import { App } from "./containers";
import { UserEdit, NotFound, Home } from "./components";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="user-edit(/:id)" component={UserEdit}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export { router };
