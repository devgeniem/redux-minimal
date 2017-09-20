import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ControlLabel } from 'react-bootstrap';
import { Form, Field, reduxForm } from 'redux-form/immutable';
import { IconButton } from '../../components/IconButton/IconButton';
import './register.scss';
import * as AuthenticationAPI from '../../api/authenticationApi';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(user) {
    console.log(user)
    this.props.dispatch(AuthenticationAPI.register(user));
  }

  render() {
    const { handleSubmit, invalid } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.handleFormSubmit)}>

        <div className="login-container">
          <ControlLabel htmlFor="email">Email</ControlLabel>
          <Field
            className="form-control"
            component="input"
            name="email"
            required />

          <br />

          <ControlLabel htmlFor="password">Password</ControlLabel>

          <Field
            className="form-control"
            component="input"
            type="password"
            name="password"
            required />

          <br />

          <IconButton
            type="submit"
            label="Register"
            invalid={invalid}
            icon="ion-person-add"
          />
        </div>
      </Form>
    );
  }
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

Register.defaultProps = {
  invalid: false,
  handleSubmit: () => {},
};

// decorate the form component
const RegisterForm = reduxForm({
  form: 'register',
})(Register);

export default connect()(RegisterForm);
