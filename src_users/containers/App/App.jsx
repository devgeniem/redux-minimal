import React from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';
import UserList from "../../containers/UserList/UserList";
import { Menu } from '../../components/';
import '../../stylesheets/main.scss';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  componentWillMount() {
    console.log('aloitus');
    // the first time we load the app, we need that users list
    this.props.dispatch({ type: 'USERS_FETCH_LIST' });
  }

  changeLanguage(lang) {
    this.props.dispatch({ type: 'SET_LANGUAGE', lang });
    i18next.changeLanguage(lang);
  }

  render() {
    // show the loading state while we wait for the app to load

    const { users, children } = this.props;
    if (!users.length) {
      return (
        <ProgressBar active now={100} />
      );
    }
    return (
      <div className="container">
        <div>
          <Menu changeLanguage={this.changeLanguage} />
        </div>
        <div>
          <div className="page-home">
            <UserList users={users} />
          </div>
        <div className="footer">
          <img alt="logo" src="/media/logo.svg" />
          <span>
            Simple users app built with {' '}
            <a href="http://redux-minimal.js.org/" rel="noopener noreferrer" target="_blank">redux-minimal</a>
          </span>
        </div>
      </div>
      </div>
    );
  }
}


App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

// export the connected class
function mapStateToProps(state) {
  return {
    users: state.users || [],
  };
}
export default connect(mapStateToProps)(App);
