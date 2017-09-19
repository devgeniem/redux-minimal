import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {UserListItem} from '../../components/UserListItem/UserListItem';
import {UserRemoveModal} from './UserRemoveModal';
import './user-list.scss';

import * as UserAPI from '../../api/userApi';

class UserList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: null,
    };

    this.openRemovePrompt = this.openRemovePrompt.bind(this);
    this.closeRemovePrompt = this.closeRemovePrompt.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);

  }

  handleDeleteClick(userId) {
    this.props.dispatch(UserAPI.deleteUser(userId));
    this.closeRemovePrompt();
  }

  openRemovePrompt(user) {
    this.setState({
      showModal: true,
      user,
    });
  }

  closeRemovePrompt() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const users = this.props.users || [];

    return (
      <div className="user-list">
        <ul>
          { users ? users.map(
            user =>
              <li key={uuid()}>
                <UserListItem
                  onDeleteClick={() => {
                    this.openRemovePrompt(user);
                  }}
                  user={user}
                />
              </li>) : '-' }
        </ul>


        <UserRemoveModal
          show={this.state.showModal}
          handleConfirm={this.handleDeleteClick}
          handleDismiss={this.closeRemovePrompt}
          user={this.state.user}
        />
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
