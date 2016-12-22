/*
 *
 * LoginPage
 *
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import selectLoginPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { setAppbar } from '../Header/actions';
import { actions as sessionActions } from '../../apis/session';

import Img from '../../components/Img';
import LogoImg from './logo.png';
import AvatarImg from '../../avatar.jpg';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLogo = styled(Img)`
  width: 64px;
  height: 64px;
  align-self: center;
  margin-top: 8px;
`;

const HeaderMessage = styled.h1`
  align-self: center;
  font-size: 38px;
  color: #555;
  font-weight: 300;
  letter-spacing: 1px;
`;

const LoginContainer = styled(Paper)`
  width: 354px;
  padding: 40px;
  background-color: #f7f7f7;
  text-align: center;
  align-self: center;
  display: flex;
  flex-direction: column;
`;

const StyledAvatar = styled(Img)`
  width: 96px;
  height: 96px;
  align-self: center;
  border-radius: 48px;
`;

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    setAppbar: React.PropTypes.func,
    login: React.PropTypes.func,
  }

  state = {
    username: '',
    password: '',
  }

  componentDidMount() {
    this.props.setAppbar({
      hide: true,
    });
  }

  handleUsernameChanged = (event) => {
    this.setState({
      username: event.target.value,
    });
  }

  handlePasswordChanged = (event) => {
    this.setState({
      password: event.target.value,
    });
  }

  handleLogin = () => {
    const { username, password } = this.state;
    this.props.login({
      username,
      password,
    });
  }

  render() {
    return (
      <PageContainer>
        <StyledLogo src={LogoImg} alt="GitLab Classroom" />
        <HeaderMessage>
          <FormattedMessage {...messages.header} />
        </HeaderMessage>
        <LoginContainer zDepth={1} style={{ backgroundColor: '#f7f7f7' }}>
          <StyledAvatar src={AvatarImg} alt="Avatar" />
          <TextField
            floatingLabelText={<FormattedMessage {...messages.username} />}
            style={{ width: '100%' }}
            onChange={this.handleUsernameChanged}
          />
          <TextField
            floatingLabelText={<FormattedMessage {...messages.password} />}
            type="password"
            style={{ width: '100%', marginTop: -16, marginBottom: 16 }}
            onChange={this.handlePasswordChanged}
          />
          <RaisedButton
            primary
            label={<FormattedMessage {...messages.login} />}
            onTouchTap={this.handleLogin}
          />
        </LoginContainer>
      </PageContainer>
    );
  }
}

const mapStateToProps = selectLoginPage();

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setAppbar,
    login: sessionActions.login,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
