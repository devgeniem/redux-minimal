import React from "react";
import { UserList } from "../../containers/";

export default class Home extends React.Component {
  render() {
    return (
      <div className="page-home">
        <UserList/>
      </div>
    );
  }
}
