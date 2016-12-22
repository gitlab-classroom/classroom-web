/*
 *
 * AssignmentPage
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

import { setAppbar } from '../Header/actions';
import { actions as assignmentActions } from '../../apis/assignment';

import describeDeadline from '../../utils/describeDeadline';

export class AssignmentPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    setAppbar: React.PropTypes.func,
    getAssignment: React.PropTypes.func,
    routeParams: React.PropTypes.object,
    assignment: React.PropTypes.object,
  }

  componentDidMount() {
    this.props.setAppbar({
      title: <FormattedMessage {...messages.header} />,
    });
    this.props.getAssignment(this.props.routeParams.assignmentId);
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
    const assignment = this.props.assignment;
    const CardExampleWithAvatar = assignment ? (
      <StyledCard>
        <CardTitle
          title={assignment.name_with_namespace}
          subtitle={describeDeadline(assignment.deadline)}
        />
        <CardText>
          {assignment.description}
        </CardText>
        <CardActions style={{ float: 'right' }}>
          <RaisedButton label="Edit" primary style={style} />
          <RaisedButton label="Publish" primary style={style} />
        </CardActions>
      </StyledCard>
    ) : (
      <StyledCard>
        <CardTitle title={<FormattedMessage {...messages.loading} />} />
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
    getAssignment: assignmentActions.getAssignment,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentPage);
