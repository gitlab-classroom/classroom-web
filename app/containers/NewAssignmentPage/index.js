/*
 *
 * NewAssignmentPage
 *
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

import { setAppbar } from '../Header/actions';
import { actions as assignmentActions } from '../../apis/assignment';

export class NewAssignmentPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    setAppbar: React.PropTypes.func,
    routeParams: React.PropTypes.object,
    newAssignment: React.PropTypes.func,
  }

  state = {
    name: '',
    description: '',
    deadline: new Date(),
  };

  componentDidMount() {
    this.props.setAppbar({
      title: <FormattedMessage {...messages.header} />,
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  handleNameChanged = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleDescriptionChanged = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleDeadlineChanged = (_, deadline) => {
    this.setState({
      deadline,
    });
  };

  newAssignment = () => {
    this.props.newAssignment({
      id: this.props.routeParams.classId,
      ...this.state,
    });
  }

  render() {
    const AssignmentContainer = styled.div`
      width: 100%;
      margin-top: 16px;
      display: flex;
      flex-wrap: wrap;
    `;
    const StyledCard = styled(Card)`
      width: 100%;
    `;
    const CardExampleWithAvatar = (
      <StyledCard>
        <CardTitle
          title={<TextField
            floatingLabelText="Assignment Title"
            onChange={this.handleNameChanged}
          />}
          subtitle={<DatePicker
            hintText="Deadline"
            onChange={this.handleDeadlineChanged}
          />}
        />
        <CardText>
          <TextField
            hintText="Description"
            multiLine
            rows={1}
            fullWidth
            onChange={this.handleDescriptionChanged}
          />
        </CardText>
        <CardActions style={{ float: 'right' }}>
          <RaisedButton label="Publish" primary style={style} onTouchTap={this.newAssignment} />
        </CardActions>
      </StyledCard>
    );
    return (
      <div>
        <Helmet
          title="Assignment"
          meta={[
            { name: 'description', content: 'Description of AssignmentPage' },
          ]}
        />
        <AssignmentContainer>
          {CardExampleWithAvatar}
        </AssignmentContainer>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.routeParams.assignmentId;
  id = parseInt(id, 10);
  const assignment = state.getIn(['assignment', id]);
  return {
    assignment,
  };
};

const style = {
  margin: 15,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setAppbar,
    newAssignment: assignmentActions.newAssignment,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAssignmentPage);

