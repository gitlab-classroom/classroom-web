/**
 *
 * ClassCard
 *
 */

import React from 'react';
import { browserHistory } from 'react-router';

import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const StyledCard = styled(Paper)`
  width: 220px;
  height: 200px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    cursor: pointer;
  }
`;

const CourseHeader = styled.h3`
    width: 100%;
    margin-top: 30px;
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
    color: white;
`;

const StudentInfo = styled.p`
    width: 100%;
    margin-top: 0px;
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
    color: white;
`;

const AssignmentInfo = styled.p`
  margin-left: 10px;
  font-size: 60%;
`;

function nameParser(name) {
  return name.split('').map(
    (ch) => (ch === ch.toUpperCase() ? ' '.concat(ch) : ch)
  ).join('');
}

class ClassCard extends React.Component {

  static propTypes = {
    id: React.PropTypes.number,
    headerColor: React.PropTypes.string,
    name: React.PropTypes.string,
    semester: React.PropTypes.string,
    description: React.PropTypes.string,
  };

  state = {
    shadow: 1,
  };

  onMouseEnter = () => this.setState({ shadow: 4 });
  onMouseLeave = () => this.setState({ shadow: 1 });
  jumpToAssignments = () => browserHistory.push(`/class/${this.props.id}`);


  render() {
    const { headerColor, name, semester, description } = this.props;

    const CardHeader = styled.div`
      width: 100%;
      height: 120px;
      background-color: ${headerColor}
    `;

    return (
      <StyledCard
        zDepth={this.state.shadow}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.jumpToAssignments}
      >
        <CardHeader>
          <CourseHeader>{nameParser(name)}</CourseHeader>
          <StudentInfo>{semester}</StudentInfo>
        </CardHeader>
        <AssignmentInfo>{description}</AssignmentInfo>
      </StyledCard>
    );
  }
}


export default ClassCard;
