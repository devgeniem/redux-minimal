import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'react-bootstrap';
import {IconButton} from '../../components/IconButton/IconButton';
import './user-remove-modal.scss';

export class UserRemoveModal extends React.Component {
  render() {
    const {show, handleConfirm, handleDismiss, user} = this.props;
    return (<Modal className="user-remove-modal" show={show}>
      <Modal.Header>
        <h1>Removing {user.email}</h1>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to do this this?</p>
      </Modal.Body>

      <Modal.Footer>
        <IconButton
          icon="ion-ios-trash"
          label="Remove"
          onClick={() => {
            handleConfirm(user.id);
          }}
        />
        <IconButton
          label="Cancel"
          onClick={() => {
            handleDismiss();
          }}
        />
      </Modal.Footer>
    </Modal>);
  }
}

UserRemoveModal.defaultProps = {
  show: false,
  handleConfirm: () => {},
  handleDismiss: () => {},
  user: {},
};

UserRemoveModal.propTypes = {
  show: PropTypes.bool,
  handleConfirm: PropTypes.func,
  handleDismiss: PropTypes.func,
  user: PropTypes.shape({}),
};
