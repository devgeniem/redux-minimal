import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, HelpBlock, Row, Col } from 'react-bootstrap';

export default class FormField extends React.Component {

  // the field content
  content() {
    const { theme, label } = this.props;
    if (theme === 'other_theme') {
      // layout for some other theme
      return null;
    }
    // default theme: 2col
    return (
      <Row>
        <Col sm={3}>{label}</Col>
        <Col sm={9}>{this.field()}</Col>
      </Row>
    );
  }


  // the field itself
  field() {
    const { input, componentClass, type, placeholder, children } = this.props;
    return (
      <FormControl {...input} componentClass={componentClass} type={type} placeholder={placeholder}>
        {children}
      </FormControl>
    );
  }

  render() {
    const { className, doValidate, meta } = this.props;
    let validationState;
    if (!meta.touched) {
      validationState = null;
    } else if (meta.error) {
      validationState = 'error';
    } else {
      validationState = 'success';
    }

    if (doValidate) {
      return (
        <FormGroup
          className={className}
          validationState={validationState}
        >
          {this.content()}
          <FormControl.Feedback />
          <HelpBlock>
            {meta.touched && meta.error ? meta.error : null}
          </HelpBlock>
        </FormGroup>
      );
    }
    return (
      <FormGroup className={className}>
        {this.content()}
      </FormGroup>
    );
  }
}

FormField.propTypes = {
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }).isRequired,
  input: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  theme: PropTypes.string,  // 2col (default), etc
  doValidate: PropTypes.bool, // true or false
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),  // the field text or a react component if we have html inside (empty string by default)
  componentClass: PropTypes.string, // input (by default), textarea, select
  type: PropTypes.string,   // input type: text (by default), password
  placeholder: PropTypes.string,    // input placeholder (empty string by default)
  className: PropTypes.string,  // the class name (empty string by default)
};

FormField.defaultProps = {
  children: null,
  theme: '2col',
  doValidate: true,
  label: '',
  componentClass: 'input',
  type: 'text',
  placeholder: '',
  className: '',
};

