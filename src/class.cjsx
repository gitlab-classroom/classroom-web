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
        <CardTitle className="class-title" style={height: 80, backgroundColor: @props.color} title={@props.class} subtitle={@props.year}>
        </CardTitle>
        <CardText style={display: 'flex'}>
          <div style={width: 'calc(100% - 40px)'}>
            {@props.description}
          </div>
          <Avatar className="classgroup-avatar" src={@props.avatar}/>
        </CardText>
      </Card>
    </div>
ClassGroup = React.createClass
  render: ->
    <div className="classgroup-container">
      <ClassCard class="Minecraft"
                 teacher="notch"
                 year="2013 Summer"
                 description="Barfoo!"
                 color="#1E88E5"
                 avatar="../assets/user.jpg"/>
      <ClassCard class="Starcraft"
                 teacher="Huang Xudong"
                 year="2012 Spring"
                 description="Dog vs Dog"
                 color="#D81B60"
                 avatar="../assets/user.jpg"/>
      <ClassCard class="Fallout 4"
                 teacher="AwesomeFace"
                 year="2015 Fall"
                 description="Rubbish Everywhere"
                 color="#43A047"
                 avatar="../assets/user.jpg"/>
      <ClassCard class="KanColle"
                 teacher="Yamato"
                 year="1944 Fall"
                 description="6inch Triple Gun Mount"
                 color="#FF9800"
                 avatar="../assets/user.jpg"/>

  </div>
module.exports = ClassGroup
