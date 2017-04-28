import React from "react";
import { UserList } from "../../components/";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <UserList/>
      </div>
    );
  }
}
