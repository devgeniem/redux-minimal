import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Col, PageHeader, Row } from 'react-bootstrap';
// import { FormField, FormSubmit } from '../../components/';
import UserActions from '../../actions/users';

export class UserEdit extends React.Component {
  constructor(props) {
    super(props);

    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(values) {
    const { dispatch } = this.props;

    const user = { id: values.id || 0, username: values.username, job: values.job };

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
    const { user } = this.props;
    return (
      <div className="page-user-edit">
        <PageHeader>{`User ${user.id ? 'edit' : 'add'}`}</PageHeader>
        <Col xs={12}>
          <Row>
            <input placeholder="username" type="text" />
          </Row>
          <Row>
            <input placeholder="job" type="text" />
          </Row>
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

// export the connected class
function mapStateToProps(state, ownProps) {
  const user = state.users.find(x => Number(x.id) === Number(ownProps.params.id)) || {};
  return {
    user,
    initialValues: user,
  };
}
export default connect(mapStateToProps)(UserEdit);
