import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import './user-list-item.scss';

export class UserListItem extends React.Component {

  render() {
    const user = this.props.user;
    return (
      <div className="user-list-item">
        <Link to={`user/${user.id}`}>
          {user.email}
          {user.name ? ` (${this.props.user.name})` : null}
        </Link>
        <button onClick={this.props.onDeleteClick}>Delete</button>
      </div>
    );
  }
}

UserListItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  onDeleteClick: PropTypes.func,
};

UserListItem.defaultProps = {
  onDeleteClick: () => {
    throw new Error('onDeleteClick function is undefined');
  },
};
