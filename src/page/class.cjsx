React = require 'react'

ClassCard = require '../class-card'
AppBar = require '../app-bar'

ClassGroup = React.createClass
  render: ->
    <div className="class-group"
         style={@props.style}>
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
