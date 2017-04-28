import React from "react";
import {
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';
import App from "./components/App";
import Home from "./components/Home";
import UserEdit from "./components/UserEdit";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/user-edit/:id" component={UserEdit}/>
    </div>
  </Router>
);

// export
export { router };
