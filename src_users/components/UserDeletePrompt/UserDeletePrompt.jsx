import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class UserDeletePrompt extends React.Component {
  render() {
    const { show, user, hideDelete, userDelete } = this.props;
    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            Are you sure you want to delete <strong>{user.username}</strong>?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={hideDelete}>No</Button>
          <Button bsStyle="primary" onClick={userDelete}>Yes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

UserDeletePrompt.PropTypes = {
  show: PropTypes.bool.isRequired,
  user: PropTypes.PropTypes.shape({}).isRequired,
  hideDelete: PropTypes.func.isRequired,
  userDelete: PropTypes.func.isRequired,
};

