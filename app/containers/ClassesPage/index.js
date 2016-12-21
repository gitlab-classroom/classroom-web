/*
 *
 * ClassesPage
 *
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectClassesPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { setAppbar } from '../Header/actions';

export class ClassesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  propTypes = {
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
