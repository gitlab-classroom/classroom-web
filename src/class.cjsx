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

ClassStyles =
  container:
    display: 'flex'
    flexDirection: 'row'
    flexWrap: 'wrap'
    justifyContent: 'flex-start';
    marginLeft: 'auto'
    marginRight: 'auto'
  middle:
    marginLeft: 'auto'
    marginRight: 'auto'
  avatar:
    marginLeft: 'auto'
    marginRight: 0
    marginTop: -40
    zIndex: 10
    width: 38
    height: 38

ClassCard = React.createClass
  render: ->
    <div className="class-card">
      <Card>
        <CardTitle className="class-title" style={height: 80, backgroundColor: @props.color, color: '#FFF !important'} title={@props.class} subtitle={@props.teacher}>
        </CardTitle>
        <CardText style={display: 'flex'}>
          <div style={width: 'calc(100% - 40px)'}>
            {@props.description}
          </div>
          <Avatar style={ClassStyles.avatar} src={@props.avatar}/>
        </CardText>
      </Card>
    </div>
Class = React.createClass
  render: ->
    <div style={ClassStyles.container}>
      <style>{"
        .class-title span {
          color: #FFF !important;
        }
        .class-title span {
          color: #FFF !important;
        }
        .class-card {
          padding: 10px;
        }\
        @media (min-width: 980px) {
          .class-card {
            width: calc(25% - 20px);
          }
        }
        @media (min-width: 768px) and (max-width: 979px) {
          .class-card {
            width: calc(33% - 20px);
          }
        }
        @media (min-width: 384px) and (max-width: 767px) {
          .class-card {
            width: calc(50% - 20px);
          }
        }
        @media (max-width: 383px) {
          .class-card {
            width: calc(100% - 20px);
          }
        }
      "}</style>
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
module.exports = Class
