import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './user-list-item.scss';
import * as UserAPI from '../../api/userApi';


class UserListItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick() {
    this.props.dispatch(UserAPI.deleteUser(this.props.user.id));
  }

  render() {

    const user = this.props.user;
    return (
      <div className="user-list-item">
        <Link to={`user/${user.id}`}>
          {user.name}
        </Link>
        <button onClick={this.handleDeleteClick}>Delete</button>
      </div>

    );
  }
}

UserListItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,

};

export default connect()(UserListItem);
