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
import selectAssignmentPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { setAppbar } from '../Header/actions';

export class AssignmentPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    setAppbar: React.PropTypes.func,
  }

  componentDidMount() {
    this.props.setAppbar({
      title: <FormattedMessage {...messages.header} />,
    });
  }

  render() {
    const AssignmentContainer = styled.div`
      width: 100%;
      margin-top: 16px;
      display: flex;
      flex-wrap: wrap;
    `;
    const CardExampleWithAvatar = () => (
      <Card>
        <CardTitle title="Requirement Analyst" subtitle="Deadline:12/26.2016" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions style={{ float: 'right' }}>
          <RaisedButton label="Edit" primary style={style} />
          <RaisedButton label="Publish" primary style={style} />
        </CardActions>
      </Card>
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
          <CardExampleWithAvatar />
        </AssignmentContainer>
      </div>
    );
  }
}

const mapStateToProps = selectAssignmentPage();

const style = {
  margin: 15,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setAppbar,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentPage);
