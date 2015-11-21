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
        <CardTitle className="class-title" style={height: 80, backgroundColor: @props.color} title={@props.class} subtitle={@props.teacher}>
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
                 description="Barfoo!"
                 color="#1E88E5"
                 avatar="https://lh5.googleusercontent.com/-pPtKOoDHltQ/VAhTkG_hh7I/AAAAAAAAFQI/_S_aYZZp8B0/s524-no/anime_wallpaper_Kantai_Collection_yahagi-Yarai-1163781.png"/>
      <ClassCard class="Starcraft"
                 teacher="Huang Xudong"
                 description="Dog vs Dog"
                 color="#D81B60"
                 avatar="https://lh5.googleusercontent.com/-pPtKOoDHltQ/VAhTkG_hh7I/AAAAAAAAFQI/_S_aYZZp8B0/s524-no/anime_wallpaper_Kantai_Collection_yahagi-Yarai-1163781.png"/>
      <ClassCard class="Fallout 4"
                 teacher="AwesomeFace"
                 description="Rubbish Everywhere"
                 color="#43A047"
                 avatar="https://lh5.googleusercontent.com/-pPtKOoDHltQ/VAhTkG_hh7I/AAAAAAAAFQI/_S_aYZZp8B0/s524-no/anime_wallpaper_Kantai_Collection_yahagi-Yarai-1163781.png"/>
      <ClassCard class="KanColle"
                 teacher="Yamato"
                 description="46inch Triple Gun Mount"
                 color="#FF9800"
                 avatar="https://lh5.googleusercontent.com/-pPtKOoDHltQ/VAhTkG_hh7I/AAAAAAAAFQI/_S_aYZZp8B0/s524-no/anime_wallpaper_Kantai_Collection_yahagi-Yarai-1163781.png"/>

  </div>
module.exports = ClassGroup
