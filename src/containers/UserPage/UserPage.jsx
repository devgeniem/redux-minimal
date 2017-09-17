import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Form, Field, reduxForm} from 'redux-form';
import {Button, Row, Col} from 'react-bootstrap';

import * as UserAPI from '../../api/userApi';

import {ImgUploader} from '../../components/ImgUploader/ImgUploader';

class UserPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleAvatarSave = this.handleAvatarSave.bind(this);

  }

  handleFormSubmit(user) {
    if (this.props.params.id) {
      this.props.dispatch(UserAPI.updateUser(user));
    } else {
      //this.props.dispatch(UserAPI.createUser(user));
    }
  }

  handleAvatarSave(file) {
    this.props.dispatch(UserAPI.uploadAvatar(file));
  }

  render() {
    const { handleSubmit } = this.props;
    const heading = this.props.params.id ? `Editing ${this.props.user.name}` : 'Create a new user';

    return (
      <div className="users-list">
        <h1>{heading}</h1>
        <Form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <Row>
            <Col sm={6}>
              <ImgUploader handleSave={this.handleAvatarSave}/>
            </Col>
            <Col sm={6}>
              <label className="form-label" htmlFor="name">Name</label>
              <Field className="form-control" name="name" placeholder="Name" component="input" required/>
            </Col>
          </Row>
          <br />
          <Button disabled={this.props.invalid} type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}

UserPage.propTypes = {
  invalid: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

UserPage.defaultProps = {
  invalid: false,
};

const mapStateToProps = (state, ownProps) => {
  let user = {};
  if (state.users && state.users.users) {
    user = state.users.users.find(x => Number(x.id) === Number(ownProps.params.id)) || {};
  }
  return {
    user,
    initialValues: user,
  };
};

// decorate the form component
const UserForm = reduxForm({
  form: 'user_edit',
  validate: (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Name is required';
    return errors;
  },
})(UserPage);

export default connect(mapStateToProps)(UserForm);
