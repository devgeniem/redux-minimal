import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/main.scss';

export default class App extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}
