import React from 'react';
import PropTypes from 'prop-types';
import './icon-button.scss';

export class IconButton extends React.Component {

  render() {
    const { icon, transparent, onClick, label, type, disabled } = this.props;
    let extraClasses = '';
    if (transparent) extraClasses += ' transparent';
    if (label) extraClasses += ' label';
    return (
      <button
        className={`icon-button ${extraClasses}`}
        type={type}
        disabled={disabled}
        onClick={() => {
          onClick();
        }}
      >
        <i className={`icon ${icon}`} />
        {label ? <span className="label">{label}</span> : null}
      </button>
    );
  }

}

IconButton.propTypes = {
  transparent: PropTypes.bool,
  icon: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
};

IconButton.defaultProps = {
  transparent: false,
  label: null,
  disabled: false,
  type: 'button',
  icon: '',
  onClick: () => {
  },
};
