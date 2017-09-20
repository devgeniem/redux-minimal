import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import UserList from '../UserList/UserList';

class Home extends React.Component {

  renderUsers() {
    const { users } = this.props;
    if (users.all && users.all.length > 0) {
      return <UserList users={users.all} />;
    }
    return <h1>User list is emptyish</h1>;
  }

  render() {
    return (
      <div className="app">
        {this.renderUsers()}
      </div>
    );
  }
}

Home.propTypes = {
  users: PropTypes.shape({}),
};

Home.defaultProps = {
  users: {},
};

const mapStateToProps = (state) => {
  return {
    users: state.get('users'),
  };
};

export default connect(mapStateToProps)(Home);

