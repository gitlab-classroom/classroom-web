/*
 *
 * Header
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectHeader from './selectors';
import AppBar from 'material-ui/AppBar';
import styled from 'styled-components';

const AppBarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
`;

export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    appbarArgs: React.PropTypes.object,
  }

  render() {
    const { appbarArgs } = this.props;
    if (appbarArgs.hide) {
      return null;
    }
    return <AppBarContainer><AppBar {...appbarArgs} /></AppBarContainer>;
  }
}

const mapStateToProps = selectHeader();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
