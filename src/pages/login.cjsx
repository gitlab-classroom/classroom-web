React = require 'react'
RaisedButton = require 'material-ui/lib/raised-button'

Oauth = require '../oauth'

LoginPage = React.createClass
  oauthLogin: ->
    Oauth('gitlab').login(response_type: 'code')

  render: ->
    <RaisedButton className='login-confirm'
                  secondary={true}
                  style={width: '100%'}
                  label="Login With Gitlab"
                  onClick={this.oauthLogin}
                  />

module.exports = LoginPage
