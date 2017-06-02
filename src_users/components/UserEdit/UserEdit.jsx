import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Col, PageHeader, Row, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';
// import { FormField, FormSubmit } from '../../components/';


export class UserEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return (
      <div className="page-user-edit">
        <PageHeader>{`User ${user.id ? 'edit' : 'add'}`}</PageHeader>
        <form>
            <FormGroup
              controlId="formBasicText">
              <ControlLabel>User info</ControlLabel>
              <FormControl
                type="text"
                placeholder="user"
              />
              <FormControl
                type="text"
                placeholder="job"
              />
              <FormControl.Feedback />

              <Button bsStyle="primary">
                penis
              </Button>
            </FormGroup>
          </form>
      </div>
    );
  }
}

UserEdit.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired,
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
