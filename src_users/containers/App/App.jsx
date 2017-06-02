import React from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';
import { Menu } from '../../components/';
import { setLanguage } from '../../actions/lang';
import { usersFetchList } from '../../actions/users';
import '../../stylesheets/main.scss';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  componentWillMount() {
    // the first time we load the app, we need that users list
    this.props.dispatch(usersFetchList());
  }

  changeLanguage(lang) {
    this.props.dispatch(setLanguage(lang));
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
        <div className="main">
          {children}
        </div>
        <div className="footer"></div>
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
  children: PropTypes.node.isRequired,
};

// export the connected class
function mapStateToProps(state) {
  return {
    users: state.users || [],
  };
}
export default connect(mapStateToProps)(App);
