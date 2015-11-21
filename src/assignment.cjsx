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

AssignmentCard = React.createClass
  render: ->
    <div className="assignment-card">
      <Card>
        <CardText style={display: 'flex'}>
          <div className='flex-row' style={width: '100%'}>
            <div><b>ASSIGNMENT</b> {@props.start}</div>
            <div style={marginLeft: 'auto', color: '#F44336'}><b>DUE</b> {@props.end}</div>
          </div>
        </CardText>
        <CardText className="assignment-title" style={height: 40, backgroundColor: '#f7f7f7'} title="Leave a comment...">
          <Avatar className="assignment-avatar" src={@props.avatar}/>
        </CardText>
      </Card>
    </div>

AssignmentGroup = React.createClass
  render: ->
    <div className="assigmentgroup-container">
      <AssignmentCard avatar="../assets/user.jpg" start="Nov17" end="Nov18"/>
    </div>
module.exports = AssignmentGroup
