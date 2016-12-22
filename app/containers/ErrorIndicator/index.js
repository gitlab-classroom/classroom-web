/*
 *
 * ErrorIndicator
 *
 */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

import selectErrorIndicator from './selectors';
import { actions, reducer } from './actions';
import sagas from './sagas';


class ErrorIndicator extends Component {

  static toInject = { reducer, sagas };

  static propTypes = {
    handleClose: PropTypes.func,
    open: PropTypes.bool,
    errorMessage: PropTypes.any,
  };

  render() {
    const { handleClose, open, errorMessage } = this.props;
    return (
      <Snackbar
        open={open}
        message={errorMessage}
        autoHideDuration={2000}
        onRequestClose={handleClose}
      />
    );
  }
}


export default connect(
  selectErrorIndicator(),
  (dispatch) => bindActionCreators({
    handleClose: () => actions.close(),
  }, dispatch)
)(ErrorIndicator);
