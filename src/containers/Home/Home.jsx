import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { PropTypes } from 'prop-types';
import UserList from '../UserList/UserList';

class Home extends React.Component {

  renderUsers() {

    const { users, t } = this.props;
    if (users.all && users.all.length > 0) {
      return <UserList users={users.all} />;
    }
    return <h1>{t('UserListEmpty')}</h1>;
  }

  render() {
    return (
      <div className="app">
        {this.renderUsers()}
      </div>
    );
  }
}

Home.propTypes = {
  users: PropTypes.shape({}),
  t: PropTypes.func,
};

Home.defaultProps = {
  users: {},
  t: null,
};

const mapStateToProps = (state) => {
  return {
    users: state.get('users'),
  };
};

export default connect(mapStateToProps)(translate('Home')(Home));

