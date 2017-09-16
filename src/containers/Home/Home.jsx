import React from 'react';
import UserList from '../../components/UserList/UserList';
import {connect} from 'react-redux';

class Home extends React.Component {
  render() {
    const users = this.props.users || [];
    return (
      <div className="app">
        <UserList users={users}></UserList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users || [],
  };
};

export default connect(mapStateToProps)(Home);

