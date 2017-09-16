import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as userActions from '../../actions/users';
import './app.scss';
import '../../stylesheets/main.scss';

class App extends React.Component { //eslint-disable-line

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(userActions.fetchUsers());
  }

  render() {
    return (
      <div className="container">
        <header className="app-header">
          <h1>
            <Link to={'/'}>SB2 Test</Link>
          </h1>
          <Link to={'/user'}>Create new user</Link>
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
};

App.defaultProps = {
  users: [],
};

export default connect()(App);
