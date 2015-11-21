React = require 'react'
ReactDOM = require 'react-dom'
{StyleSheet} = React
Card = require('material-ui/lib/card/card');
CardActions = require('material-ui/lib/card/card-actions');
CardText = require('material-ui/lib/card/card-text');
TextField = require('material-ui/lib/text-field');
Avatar = require('material-ui/lib/avatar');
RaisedButton = require('material-ui/lib/raised-button');

LoginStyles =
  dialog:
    width: 300
    padding: 8
    marginLeft: 'auto'
    marginRight: 'auto'
  container:
    display: 'flex'
    flexDirection: 'column'
    marginLeft: 'auto'
    marginRight: 'auto'
  middle:
    marginLeft: 'auto'
    marginRight: 'auto'

Login = React.createClass
  render: ->
    <div style={LoginStyles.middle}>
      <Card style={LoginStyles.dialog}>
        <CardText style={display: 'flex'}>
          <div style={LoginStyles.container}>
            <Avatar size={120} style={LoginStyles.middle} src="https://lh5.googleusercontent.com/-pPtKOoDHltQ/VAhTkG_hh7I/AAAAAAAAFQI/_S_aYZZp8B0/s524-no/anime_wallpaper_Kantai_Collection_yahagi-Yarai-1163781.png"/>
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
