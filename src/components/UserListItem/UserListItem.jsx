import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { IconButton } from '../IconButton/IconButton';
import './user-list-item.scss';

export class UserListItem extends React.Component {

  renderProfilePic() {
    const { url, email } = this.props.user;
    if (url) {
      return (
        <div className="profile-pic">
          <img
            src={`http://${url}`}
            alt={email}
          />
        </div>
      );
    }
    return <div className="profile-pic placeholder" />;
  }

  render() {
    const { name, id, email } = this.props.user;

    return (
      <div className="user-list-item">
        <Link to={`user/${id}`}>
          {this.renderProfilePic()}
          <div className="name">
            <h2>{email}</h2>
            <h5>{name}</h5>
          </div>
        </Link>
        <IconButton onClick={this.props.onDeleteClick} icon="ion-ios-trash" />
      </div>
    );
  }
}

UserListItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  onDeleteClick: PropTypes.func,
};

UserListItem.defaultProps = {
  onDeleteClick: () => {
    throw new Error('onDeleteClick function is undefined');
  },
};
