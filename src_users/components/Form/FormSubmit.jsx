import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, HelpBlock, Button } from 'react-bootstrap';

export default class FormSubmit extends React.Component {
  render() {
    const { error, invalid, submitting, buttonSaveLoading, buttonSave } = this.props;
    return (
      <div>
        {error &&
          <FormGroup validationState="error">
            <HelpBlock>{error}</HelpBlock>
          </FormGroup>}

        <FormGroup className="submit">
          <Button type="submit" bsStyle="primary" disabled={invalid || submitting}>
            {submitting ? buttonSaveLoading : buttonSave}
          </Button>
        </FormGroup>
      </div>
    );
  }
}

// prop checks
FormSubmit.PropTypes = {
  error: PropTypes.string,  // redux-form general `_error` message
  invalid: PropTypes.bool,  // redux-form invalid prop
  submitting: PropTypes.bool.isRequired,   // redux-form invalid submitting
  buttonSaveLoading: PropTypes.string, // save button loading text, default is "Saving..."
  buttonSave: PropTypes.string,    // save button text, default is "Save"
};

FormSubmit.defaultProps = {
  error: '',
  invalid: true,
  buttonSaveLoading: 'Saving...',
  buttonSave: 'Save',
};
