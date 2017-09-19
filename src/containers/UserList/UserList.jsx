import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {UserListItem} from '../../components/UserListItem/UserListItem';
import './user-list.scss';

import * as UserAPI from '../../api/userApi';

class UserList extends React.Component {

  handleDeleteClick(userId) {
    this.props.dispatch(UserAPI.deleteUser(userId));
  }

  render() {
    const users = this.props.users || [];

    return (
      <div className="user-list">
        <ul>
          { users ? users.map(
            user => <li key={uuid()}>
              <UserListItem
                onDeleteClick={() => {
                  this.handleDeleteClick(user.id);
                }} user={user}/></li>) : '-' }
        </ul>
      </div>
    );
  }
}

UserList.defaultProps = {
  users: PropTypes.arrayOf(PropTypes.shape({})),
};

UserList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object),
};

export default connect()(UserList);
