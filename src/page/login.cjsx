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

Logo = require '../logo'

Login = React.createClass
  render: ->
    <div style={fontFamily:'Roboto, sans-serif', color:'#555'}>
      <div style={width:'100%',height:200}>
        <div style={width:56,height:56,margin:'15px auto'}>
          <Logo />
        </div>
        <div style={textAlign:'center',fontSize:48,marginBottom:10,fontWeight:500}>
          GitLab Classroom
        </div>
        <div style={textAlign:'center',fontSize:30,fontWeight:300}>
          Sign in with your GitLab account
        </div>
      </div>
      <div style={margin:'auto', width:350}>
        <Card style={backgroundColor:'#f7f7f7'}>
        <CardText style={padding:40,paddingBottom:20}>
          <Avatar size={96} src="../assets/user.jpg"
                  style={margin: 'auto', display: 'block'} />
          <Paper zDepth={1}
                 style={marginTop: 30}>
            <TextField hintText="Username"
                       underlineShow={false}
                       style={marginLeft:20} />
            <Divider />
            <TextField hintText="Password"
                       underlineShow={false}
                       type='password'
                       style={marginLeft:20} />
            <Divider />
          </Paper>
        </CardText>
        <CardActions style={padding:40,paddingTop:0}>
          <RaisedButton secondary={true}
                        label="Login"
                        style={width: '100%'} />
        </CardActions>
        </Card>
      </div>
    </div>

module.exports = Login
