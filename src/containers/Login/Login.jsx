import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { ControlLabel } from 'react-bootstrap';
import { Form, Field, reduxForm } from 'redux-form/immutable';
import { Link } from 'react-router';
import { IconButton } from '../../components/IconButton/IconButton';
import * as authActions from '../../actions/authActions';
import './login.scss';
import * as AuthenticationAPI from '../../api/authenticationApi';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.dispatch(authActions.clearError());
  }

  handleLoginSubmit(user) {
    this.props.dispatch(AuthenticationAPI.login(user));
  }

  render() {
    const { handleSubmit, errorMsg, t } = this.props;

    return (
      <div className="login-container">
        {(errorMsg) ? <div className="error">{errorMsg}</div> : null}

        <Form onSubmit={handleSubmit(this.handleLoginSubmit)}>
          <ControlLabel htmlFor="email">{t('Email')}</ControlLabel>
          <Field className="form-control" component="input" name="email" />
          <br />
          <ControlLabel htmlFor="password">{t('Password')}</ControlLabel>
          <Field
            className="form-control"
            component="input"
            type="password"
            name="password"
          />
          <br />
          <IconButton
            type="submit"
            label="Login"
            icon="ion-log-in"
          />

          <br /><br />
          <Link to={'/register'}>{t('Register')}</Link>
        </Form>
      </div>
    );
  }
}

Login.defaultProps = {
  handleSubmit: () => {
    return null;
  },
  errorMsg: null,
  t: null,
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  errorMsg: PropTypes.string,
  t: PropTypes.func,
};

// decorate the form component
const LoginForm = reduxForm({
  form: 'login',
})(Login);

const mapStateToProps = (state) => {
  const errorMsg = state.get('authentication').error;
  return {
    errorMsg,
  };
};

export default connect(mapStateToProps)(translate('Login')(LoginForm));
