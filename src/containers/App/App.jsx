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
    const authenticated = localStorage.getItem('loggedIn');
    if (authenticated) this.props.dispatch(UserAPI.fetchUsers());
  }

  handleLogoutClick() {
    this.props.dispatch(AuthenticationAPI.logout());
  }

  renderLogout() {
    const transparent = true;
    if (localStorage.getItem('loggedIn')) {
      return (
        <IconButton
          icon="ion-log-out"
          transparent={transparent}
          onClick={this.handleLogoutClick}
        />)
        ;
    }
    return null;
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
          <div className="error-msg">

          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
};

App.defaultProps = {
  users: [],
};

export default connect()(App);
