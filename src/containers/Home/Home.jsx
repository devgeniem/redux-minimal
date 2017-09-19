import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import UserList from '../UserList/UserList';

class Home extends React.Component {
  render() {
    const {users} = this.props;
    return (
      <div className="app">
        <UserList users={users} />
      </div>
    );
  }
}

Home.propTypes = {
  users: PropTypes.array
};

Home.defaultProps = {
  users: [],
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users || [],
  };
};

export default connect(mapStateToProps)(Home);

