import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Form, Field, reduxForm} from 'redux-form';
import {Button,Row} from 'react-bootstrap';

import * as userActions  from '../../actions/users';

class UserPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick(user) {

    if (this.props.params.id) {
      this.props.dispatch(userActions.updateUser(user));
    } else {
      this.props.dispatch(userActions.createUser(user));
    }
  }

  render() {
    let {handleSubmit } = this.props;
    console.log(this.props)
    return (
      <div className="users-list">
        <h1>User</h1>
        <Form onSubmit={handleSubmit(this.handleSaveClick)}>
          <Field className="form-control" name="name" placeholder="Name" component="input" required/>
          <Button disabled={this.props.invalid} type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}

UserPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = (state, ownProps) => {
  let user = {};
  if (state.users && state.users.users) {
    user = state.users.users.find(x => Number(x.id) === Number(ownProps.params.id)) || {};
  }
  return {
    user,
    initialValues: user,
  };
}

// decorate the form component
const UserForm = reduxForm({
  form: 'user_edit',
  validate: (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    return errors;
  },
})(UserPage);


export default connect(mapStateToProps)(UserForm);
