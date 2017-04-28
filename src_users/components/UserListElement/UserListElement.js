import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";
import { translate } from 'react-i18next';

@translate(['list_button'])
export default class UserListElement extends React.Component {
  render() {
    const {user, showDelete, t} = this.props;
    return (
      <tr>
        <td>#{user.id}</td>
        <td>{user.username}</td>
        <td>{user.job}</td>
        <td>
          <Link to={'user-edit/' + user.id}>
            <Button bsSize="xsmall">
              {t('edit')} <Glyphicon glyph="edit"/>
            </Button>
          </Link>
        </td>
        <td>
          <Button bsSize="xsmall" className="user-delete" onClick={() => showDelete(user)}>
            {t('delete')} <Glyphicon glyph="remove-circle"/>
          </Button>
        </td>
      </tr>
    );
  }
}

UserListElement.propTypes = {
  user: PropTypes.object.isRequired,
  showDelete: PropTypes.func.isRequired,
}
