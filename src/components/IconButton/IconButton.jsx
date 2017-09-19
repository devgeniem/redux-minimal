import React from 'react';
import PropTypes from 'prop-types';

import './icon-button.scss';

export class IconButton extends React.Component {

  render() {
    const {icon, transparent, onClick} = this.props;
    let extraClasses = '';
    if (transparent) extraClasses += ' transparent';
    return (
      <button
        className={`icon-button ${extraClasses}`}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}>
        <i className={`icon ${icon}`}/>
      </button>
    );
  }

}

IconButton.propTypes = {
  transparent: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  transparent: false,
  icon: '',
  onClick: () => {
    throw new Error('onClick not defined');
  },
};
