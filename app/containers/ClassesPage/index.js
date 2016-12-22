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
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { setAppbar } from '../Header/actions';
import { actions as classApiActions } from '../../apis/class';
import ClassCard from '../../components/ClassCard';

import { pink300, amber400, blue400, cyan400 } from 'material-ui/styles/colors';


export class ClassesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    setAppbar: React.PropTypes.func,
    getClassesList: React.PropTypes.func,
    classList: React.PropTypes.object,
  }

  componentDidMount() {
    this.props.setAppbar({
      title: <FormattedMessage {...messages.header} />,
    });
    this.props.getClassesList();
  }

  render() {
    const ClassesContainer = styled.div`
      width: 100%;
      margin-top: 16px;
      display: flex;
      flex-wrap: wrap;
    `;
    // const colors2 = [lightBlue300, cyan200, teal200, teal300, pink300];
    const colors = [pink300, amber400, blue400, cyan400];
    const classCards = [];
    Object.keys(this.props.classList).forEach((id, idx) => {
      const selectedColor = colors[idx % colors.length];
      classCards.push(<ClassCard
        key={idx}
        headerColor={selectedColor}
        {...this.props.classList[id]}
      />);
    });

    return (
      <div>
        <Helmet
          title="Classes"
          meta={[
            { name: 'description', content: 'Description of ClassesPage' },
          ]}
        />

        <ClassesContainer>
          {classCards}
        </ClassesContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  classList: state.get('class').toJS(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setAppbar,
    getClassesList: classApiActions.getList,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassesPage);
