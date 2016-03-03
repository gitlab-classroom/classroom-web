React = require 'react'
ReactDOM = require 'react-dom'
Card = require 'material-ui/lib/card/card'
CardActions = require 'material-ui/lib/card/card-actions'
CardText = require 'material-ui/lib/card/card-text'
TextField = require 'material-ui/lib/text-field'
Avatar = require 'material-ui/lib/avatar'
RaisedButton = require 'material-ui/lib/raised-button'
Paper = require 'material-ui/lib/paper'
Divider = require 'material-ui/lib/divider'

OAuth = require '../oauth'
Logo = require '../logo'

Login = React.createClass
  render: ->
    return
    <div style={fontFamily:'Roboto, sans-serif', color:'#555'}>
      <div style={width:'100%',height:200}>
        <div style={width:56,height:56,margin:'15px auto'}>
          <Logo />
        </div>
        <div style={textAlign:'center',fontSize:48,marginBottom:10,fontWeight:500}>
          GitLab Classroom
        </div>
        <div style={textAlign:'center',fontSize:30,fontWeight:300}>
          Fudan Software School GitLab Server
        </div>
      </div>
      <div style={margin:'auto', width:350}>
        <Card style={backgroundColor:'#f7f7f7'}>
        <CardText style={padding:40,paddingBottom:0}>
          <Avatar size={128} src="../assets/fudan_logo.png"
                  style={margin: 'auto', display: 'block'} />
        </CardText>
        <CardActions style={padding:40}>
          <RaisedButton secondary={true}
                        label="Login with GitLab Account"
                        onClick={@oauthLogin}
                        style={width: '100%'} />
        </CardActions>
        </Card>
      </div>
    </div>

  oauthLogin: ->
    window.location = OAuth.code.getUri()

module.exports = Login
