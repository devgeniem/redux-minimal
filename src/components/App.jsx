import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/main.scss';

export default class App extends React.Component { //eslint-disable-line
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

