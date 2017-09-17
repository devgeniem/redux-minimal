import React from 'react';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, ControlLabel} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';

import './login.scss';
import * as AuthenticationAPI from '../../api/authenticationApi';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick() {
    this.props.dispatch(AuthenticationAPI.login());
  }

  render() {
    return (
      <div className="login-container">
        <ControlLabel htmlFor="username">Username</ControlLabel>
        <Field className="form-control" component="input" name="username"/>
        <br />
        <ControlLabel htmlFor="password">Password</ControlLabel>
        <Field className="form-control" component="input" type="password" name="password"/>
        <br />
        <Button onClick={this.handleLoginClick}>Login</Button>
      </div>
    );
  }
}


Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

Login.propTypes = {};
// decorate the form component
const LoginForm = reduxForm({
  form: 'user_edit',
  validate: (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Name is required';
    return errors;
  },
})(Login);

export default connect()(LoginForm);
