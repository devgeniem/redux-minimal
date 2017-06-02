import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Field, SubmissionError, reduxForm } from 'redux-form';
import { Col, PageHeader, Form } from 'react-bootstrap';
import { FormField, FormSubmit } from '../../components/';

export class UserEdit extends React.Component {
  constructor(props) {
    super(props);

    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(values) {
    const { dispatch } = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'USERS_ADD_EDIT',
        user: {
          id: values.id || 0,
          username: values.username,
          job: values.job,
        },
        callbackError: (error) => {
          reject(new SubmissionError({ _error: error }));
        },
        callbackSuccess: () => {
          dispatch(push('/'));
          resolve();
        },
      });
    });
  }

  render() {
    const { user, handleSubmit, error, invalid, submitting } = this.props;

    return (
      <div className="page-user-edit">
        <PageHeader>{`User ${user.id ? 'edit' : 'add'}`}</PageHeader>
        <Col xs={12}>
          <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
            <Field component={FormField} name="username" label="Username" doValidate />
            <Field component={FormField} name="job" label="Job" />
            <FormSubmit
              error={error}
              invalid={invalid}
              submitting={submitting}
              buttonSaveLoading="Saving..."
              buttonSave="Save User"
            />
          </Form>
        </Col>
      </div>
    );
  }
}

UserEdit.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
};

UserEdit.defaultProps = {
  error: '',
  invalid: true,
  submitting: false,
};

// decorate the form component
const UserEditForm = reduxForm({
  form: 'user_edit',
  validate: (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    return errors;
  },
})(UserEdit);

// export the connected class
function mapStateToProps(state, ownProps) {
  const user = state.users.find(x => Number(x.id) === Number(ownProps.params.id)) || {};
  return {
    user,
    initialValues: user,
  };
}
export default connect(mapStateToProps)(UserEditForm);
