/*
 *
 * Header
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectHeader from './selectors';
import AppBar from 'material-ui/AppBar';

export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  propTypes = {
    appbarArgs: React.PropTypes.object,
  }

  render() {
    return (
      <AppBar
        {...this.props.appbarArgs}
      />
    );
  }
}

const mapStateToProps = selectHeader();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
