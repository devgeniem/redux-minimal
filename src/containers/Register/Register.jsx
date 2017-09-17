import React from 'react';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, ControlLabel} from 'react-bootstrap';
import {Form, Field, reduxForm} from 'redux-form';

import './register.scss';
import * as AuthenticationAPI from '../../api/authenticationApi';


class Register extends React.Component {

  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(user) {
    this.props.dispatch(AuthenticationAPI.register(user));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.handleFormSubmit)}>

        <div className="login-container">
          <ControlLabel htmlFor="email">Email</ControlLabel>
          <Field className="form-control" component="input" name="email" required/>
          <br />
          <ControlLabel htmlFor="password">Password</ControlLabel>
          <Field className="form-control" component="input" type="password" name="password" required/>
          <br />
          <Button disabled={this.props.invalid} type="submit">Register</Button>
        </div>
      </Form>
    );
  }
}


Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
};

Register.defaultProps = {
  invalid: false,
};

// decorate the form component
const RegisterForm = reduxForm({
  form: 'register',
  validate: (values) => {
    const errors = {};
    if (!values.email) errors.email = 'Email is required';
    if (!values.password) errors.password = 'Password is required';

    return errors;
  },
})(Register);

export default connect()(RegisterForm);
