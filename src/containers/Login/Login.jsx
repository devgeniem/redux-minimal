import React from 'react';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, ControlLabel} from 'react-bootstrap';
import {Form, Field, reduxForm} from 'redux-form';
import {Link} from 'react-router';

import './login.scss';
import * as AuthenticationAPI from '../../api/authenticationApi';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit(user) {
    console.log(user);
    this.props.dispatch(AuthenticationAPI.login(user));
  }

  render() {

    const { handleSubmit } = this.props;
    return (
      <div className="login-container">
        <Form onSubmit={handleSubmit(this.handleLoginSubmit)}>
          <ControlLabel htmlFor="email">Email</ControlLabel>
          <Field className="form-control" component="input" name="email"/>
          <br />
          <ControlLabel htmlFor="password">Password</ControlLabel>
          <Field className="form-control" component="input" type="password" name="password"/>
          <br />
          <Button type="submit">Login</Button>

          <br /><br />
          <Link to={'/register'}>Register</Link>
        </Form>
      </div>
    );
  }
}


Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
};

Login.propTypes = {};
// decorate the form component
const LoginForm = reduxForm({
  form: 'login',
  validate: (values) => {
    const errors = {};
    if (!values.email) errors.email = 'Email is required';
    if (!values.password) errors.password = 'Password is required';

    return errors;
  },
})(Login);

export default connect()(LoginForm);
