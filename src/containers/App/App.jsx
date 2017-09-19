import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Button} from 'react-bootstrap';

import * as UserAPI from '../../api/userApi';
import * as AuthenticationAPI from '../../api/authenticationApi';

import './app.scss';
import '../../stylesheets/main.scss';

class App extends React.Component { //eslint-disable-line

  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(UserAPI.fetchUsers());
    this.props.dispatch(AuthenticationAPI.getSession());

  }

  handleLogoutClick() {
    this.props.dispatch(AuthenticationAPI.logout());
  }


  _renderLogout() {
    return this.props.authenticated ?
      <Button className="logout-button" onClick={this.handleLogoutClick}>Logout</Button> : '';
  }

  render() {
    return (
      <div className="container">
        <header className="app-header">
          <h1>
            <Link to={'/'}>SB2 Test</Link>
          </h1>
          {this._renderLogout()}
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
    authenticated: state.authentication.user && state.authentication.user.loggedIn,
  };
};
export default connect(mapStateToProps)(App);