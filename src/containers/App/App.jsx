import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { IconButton } from '../../components/IconButton/IconButton';
import logo from '../../images/sb2.svg';
import * as UserAPI from '../../api/userApi';
import * as AuthenticationAPI from '../../api/authenticationApi';

import './app.scss';
import '../../stylesheets/main.scss';
import '../../stylesheets/ionicons.min.css';

class App extends React.Component { //eslint-disable-line

  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(UserAPI.fetchUsers());
  }

  handleLogoutClick() {
    this.props.dispatch(AuthenticationAPI.logout());
  }

  renderLogout() {
    const transparent = true;
    return this.props.authenticated
      ? <IconButton
        icon="ion-log-out"
        transparent={transparent}
        onClick={this.handleLogoutClick} />
      : '';
  }

  render() {
    return (
      <div className="container">
        <header className="app-header">
          <Link to={'/'}>
            <img
              className="logo"
              alt="SB2"
              src={logo}
            />
          </Link>

          {this.renderLogout()}
        </header>

        <div className="app-main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
};

App.defaultProps = {
  users: [],
  authenticated: false,
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.authentication.user &&
    state.authentication.user.loggedIn,
  };
};
export default connect(mapStateToProps)(App);
