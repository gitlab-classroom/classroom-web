/**
*
* ClassCard
*
*/

import React from 'react';

import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const StyledCard = styled(Paper)`
  width: 220px;
  height: 200px;
  margin: 12px;
  display: flex;
  flex-direction: column;
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

function ClassCard({ headerColor }) {
  const CardHeader = styled.div`
    width: 100%;
    height: 120px;
    background-color: ${headerColor}
  `;

  return (
    <StyledCard zDepth={2} >
      <CardHeader>
        <CourseHeader> Project Management </CourseHeader>
        <StudentInfo> 20 Students </StudentInfo>
      </CardHeader>
      <AssignmentInfo>1 Assignment</AssignmentInfo>
    </StyledCard>
  );
}

ClassCard.propTypes = {
  headerColor: React.PropTypes.string,
};

export default ClassCard;
