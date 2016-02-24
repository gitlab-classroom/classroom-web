React = require 'react'
ReactDOM = require 'react-dom'
Card = require('material-ui/lib/card/card');
CardActions = require('material-ui/lib/card/card-actions');
CardExpandable = require('material-ui/lib/card/card-expandable');
CardHeader = require('material-ui/lib/card/card-header');
CardMedia = require('material-ui/lib/card/card-media');
CardText = require('material-ui/lib/card/card-text');
CardTitle = require('material-ui/lib/card/card-title');
Avatar = require('material-ui/lib/avatar');
RaisedButton = require('material-ui/lib/raised-button');
TextField = require('material-ui/lib/text-field');
IconMenu = require('./components/icon-menu');
MenuItem = require('material-ui/lib/menus/menu-item');
IconButton = require('material-ui/lib/icon-button');
FontAwesome = require('react-fontawesome');

AssignmentCard = React.createClass
  getInitialState: ->
    ssh: true
  setSSH: (e) ->
    @setState
      ssh: e
  render: ->
    <div className="assignment-card">
      <Card>
        <CardText className='flex-col'>
          <div className='flex-row' style={width: '100%'}>
            <div><b>ASSIGNMENT</b> {@props.start}</div>
            <div style={marginLeft: 'auto', color: '#F44336'}><b>DUE</b> {@props.end}</div>
            <IconMenu iconButtonElement={<IconButton className='fuckyou'>
                                           <FontAwesome name='ellipsis-v' />
                                         </IconButton>}>
              <MenuItem primaryText="Maps" />
              <MenuItem primaryText="Books" />
            </IconMenu>
          </div>
          <div className='flex-row' style={width: '100%'}>
            <div className='flex-col' style={width: '72%'}>
              <div className="assignment-title">
                <b>{@props.title}</b>
              </div>
              <div>
                {@props.description}
              </div>
            </div>
            <div className='flex-col assignment-count-box'>
              <div className="assignment-count">
                <b>{@props.done}</b>
              </div>
              <div>
                DONE
              </div>
            </div>
            <div className='flex-col assignment-count-box'>
              <div className="assignment-count">
                <b>{@props.notdone}</b>
              </div>
              <div>
                NOT DONE
              </div>
            </div>
          </div>
        </CardText>
        <CardText style={height: 40, backgroundColor: '#f7f7f7'}>
          <div className="flex-row">
            <div className="flex-row" style={width: '30%'}>
              <RaisedButton secondary={@state.ssh} primary={!@state.ssh} onClick={@setSSH.bind @, true} label="SSH"/>
              <RaisedButton primary={@state.ssh} secondary={!@state.ssh} onClick={@setSSH.bind @, false} label="HTTPS"/>
            </div>
            <div className="flex-flow" style={width: "40%"}>
              <TextField value={if @state.ssh then 'ssh@blahblah' else 'https://blahblah'}/>
            </div>
            <div className="flex-row switchbutton" style={width: '12%'}>
              <RaisedButton secondary={true} label="PUBLISH"/>
            </div>
            <div className="flex-row switchbutton" style={width: '12%'}>
              <RaisedButton primary={true} label="ABORT"/>
            </div>
          </div>
        </CardText>
      </Card>
    </div>

AssignmentGroup = React.createClass
  render: ->
    <div className="assignmentgroup-container">
      <AssignmentCard avatar="../assets/user.jpg" start="Nov17" end="Nov18" title="2015 Fall Event" description="You are a xianyu" done='14' notdone='20'/>
    </div>
    
module.exports = AssignmentGroup
