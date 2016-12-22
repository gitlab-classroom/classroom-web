/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../Header';

import ErrorIndicator from '../ErrorIndicator';

const AppWrapper = styled.div`
  max-width: calc(960px + 16px * 2);
  margin: 64px auto 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

function App(props) {
  return (
    <div>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - GitLab Classroom"
          defaultTitle="GitLab Classroom"
          meta={[
            { name: 'description', content: 'GitLab Classroom' },
          ]}
        />
        {React.Children.toArray(props.children)}
      </AppWrapper>
      <Header />
      <ErrorIndicator />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
