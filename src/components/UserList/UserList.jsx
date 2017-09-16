import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import UserListItem from '../../containers/UserListItem/UserListItem';
import './user-list.scss';

export default class UserList extends React.Component {

  constructor(props) {
    super(props);
    console.log('state', this.state);
  }

  render() {

    const users = this.props.users || [];

    return (
      <div className="user-list">
        <ul>
          { users ? users.map((user) => <li key={uuid()}><UserListItem user={user}/></li>) : '-' }
        </ul>
      </div>
    );
  }
}


UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};
