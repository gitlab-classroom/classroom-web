/*
 *
 * ClassesPage
 *
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import selectClassesPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { setAppbar } from '../Header/actions';
import ClassCard from '../../components/ClassCard';

import { cyan500, amber50 } from 'material-ui/styles/colors';

const ClassesContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;


export class ClassesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    setAppbar: React.PropTypes.func,
  }

  componentDidMount() {
    this.props.setAppbar({
      title: <FormattedMessage {...messages.header} />,
    });
  }

  render() {
    return (
      <div>
        <Helmet
          title="Classes"
          meta={[
            { name: 'description', content: 'Description of ClassesPage' },
          ]}
        />
        <ClassesContainer>
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={amber50} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
          <ClassCard headerColor={cyan500} />
        </ClassesContainer>
      </div>
    );
  }
}

const mapStateToProps = selectClassesPage();

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setAppbar,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassesPage);
