import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Form, Field, reduxForm} from 'redux-form';
import {Row, Col} from 'react-bootstrap';
import {IconButton} from '../../components/IconButton/IconButton';
import * as UserAPI from '../../api/userApi';

import {ImgUploader} from '../../components/ImgUploader/ImgUploader';

class UserPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(user) {
    this.props.dispatch(UserAPI.updateUser(user));
  }

  render() {
    const {handleSubmit, invalid, user} = this.props;
    const heading = `Editing ${user.email}`;

    return (
      <div className="users-list">
        <h1>{heading}</h1>
        <Form
          onSubmit={handleSubmit(this.handleFormSubmit)}
          encType="multipart/form-data">
          <Row>
            <Col sm={6}>
              <Field
                name="profilePic"
                image={user.url}
                component={ImgUploader}
                type="file"/>
            </Col>
            <Col sm={6}>
              <label className="form-label" htmlFor="name">Name</label>

              <Field
                className="form-control"
                name="name"
                placeholder="Name"
                component="input"
                required/>
              <br />

              <IconButton
                icon="ion-checkmark"
                disabled={invalid}
                type="submit"
                label="Save"/>
            </Col>
          </Row>

        </Form>
      </div>
    );
  }
}

UserPage.propTypes = {
  invalid: PropTypes.bool,
  handleSubmit: PropTypes.func,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    url: PropTypes.string,
    id: PropTypes.number,
  }),
};

UserPage.defaultProps = {
  invalid: false,
  user: {},
  params: {},
  handleSubmit: () => {
    console.warn('yeha');
  },
};

const mapStateToProps = (state, ownProps) => {
  let user = {};
  if (state.users && state.users.users) {
    user = state.users.users.find(
        x => Number(x.id) === Number(ownProps.params.id)) || {};
  }
  return {
    user,
    initialValues: user,
  };
};

// decorate the form component
const UserForm = reduxForm({
  form: 'user_edit',
  enableReinitialize: true,
  multipartForm: true,
  validate: (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Name is required';
    return errors;
  },
})(UserPage);

export default connect(mapStateToProps)(UserForm);
