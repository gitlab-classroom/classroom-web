/**
*
* ClassCard
*
*/

import React from 'react';

import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const StyledCard = styled(Paper)`
  width: 176px;
  height: 200px;
  margin: 12px;
  display: flex;
  flex-direction: column;
`;
const CardHeader = styled.div`
  width: 100%;
`;

function ClassCard() {
  return (
    <StyledCard>
      <CardHeader />
    </StyledCard>
  );
}

export default ClassCard;
