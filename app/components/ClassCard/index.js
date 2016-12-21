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

function ClassCard({ headerColor }) {
  const CardHeader = styled.div`
    width: 100%;
    height: 120px;
    background-color: ${headerColor}
  `;

  return (
    <StyledCard zDepth={2} >
      <CardHeader />
    </StyledCard>
  );
}

ClassCard.propTypes = {
  headerColor: React.PropTypes.string,
};

export default ClassCard;
