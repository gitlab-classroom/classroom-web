React = require 'react'
ReactDOM = require 'react-dom'
Card = require('material-ui/lib/card/card');
CardActions = require('material-ui/lib/card/card-actions');
CardText = require('material-ui/lib/card/card-text');
TextField = require('material-ui/lib/text-field');
Avatar = require('material-ui/lib/avatar');
RaisedButton = require('material-ui/lib/raised-button');

Login = React.createClass
  render: ->
    <div className="login-middle">
      <div className="login-middle" style={display: 'flex'}>
        <img className="login-middle login-logo" src="../assets/gitlab.png"/>
      </div>
      <div className="login-middle login-title">
        Gitlab Classroom
      </div>
      <div className="login-middle login-subtitle">
        Sign in with your Gitlab account
      </div>
      <Card className="login-dialog">
        <CardText style={display: 'flex'}>
          <div className="login-container">
            <Avatar size={96} className="login-middle" src="../assets/user.jpg"/>
            <TextField
              hintText="Username" />
            <TextField
              hintText="Password" />
          </div>
        </CardText>
        <CardActions>
          <div style={width: '100%'}>
            <RaisedButton className='login-confirm' secondary={true} style={width: '100%'} label="Login"/>
          </div>
        </CardActions>
      </Card>
    </div>

    
module.exports = Login
