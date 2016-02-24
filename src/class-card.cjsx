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

ClassCard = React.createClass
  render: ->
    <div className="class-card">
      <Card>
        <CardTitle className="class-title"
            title={@props.class}
            subtitle={@props.year}
            style={height: 80, backgroundColor: @props.color}>
        </CardTitle>
        <CardText style={display: 'flex'}>
          <div style={width: 'calc(100% - 40px)'}>
            {@props.description}
          </div>
          <Avatar className="classgroup-avatar" src={@props.avatar}/>
        </CardText>
      </Card>
    </div>

module.exports = ClassCard
