import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {Field} from 'redux-form';
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
        <Field name="username"/>
        <Field type="password" name="password"/>
        <Button onClick={this.handleLoginClick}>Login</Button>
      </div>
    );
  }
}


Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

Login.propTypes = {};

export default connect()(Login);
