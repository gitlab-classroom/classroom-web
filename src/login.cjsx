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
      <Card className="login-dialog">
        <CardText style={display: 'flex'}>
          <div className="login-container">
            <Avatar size={120} className="login-middle" src="https://lh5.googleusercontent.com/-pPtKOoDHltQ/VAhTkG_hh7I/AAAAAAAAFQI/_S_aYZZp8B0/s524-no/anime_wallpaper_Kantai_Collection_yahagi-Yarai-1163781.png"/>
            <TextField
              hintText="Username" />
            <TextField
              hintText="Password" />
          </div>
        </CardText>
        <CardActions>
          <div style={width: '100%'}>
            <RaisedButton secondary={true} style={width: '100%'} label="Login"/>
          </div>
        </CardActions>
      </Card>
    </div>
module.exports = Login
