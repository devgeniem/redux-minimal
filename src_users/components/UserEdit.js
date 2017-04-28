import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Field, SubmissionError, reduxForm } from "redux-form";
import { PageHeader, Form } from "react-bootstrap";
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";

// User add/edit page component
export class UserEdit extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    // bind <this> to the event method
    this.formSubmit = this.formSubmit.bind(this);
  }

  // render
  render() {
    return (
      <div className="page-user-edit">
        <PageHeader>User add / edit</PageHeader>
        
      </div>
    );
  }

  // submit the form
  formSubmit(values) {
    const {dispatch} = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'USERS_ADD_EDIT',
        user: {
          id: values.id || 0,
          username: values.username,
          job: values.job,
        },
        callbackError: (error) => {
          reject(new SubmissionError({_error: error}));
        },
        callbackSuccess: () => {
          dispatch(push('/'));
          resolve();
        }
      });
    });
  }
}

// decorate the form component
const UserEditForm = reduxForm({
  form: 'user_edit',
  validate: function (values) {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    return errors;
  },
})(UserEdit);

// export the connected class
function mapStateToProps(state, own_props) {
}
export default connect()(UserEdit);
