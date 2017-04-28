import React from "react";
import {
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';
import App from "./containers/App/App";

// build the router
const router = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
);

// export
export { router };
