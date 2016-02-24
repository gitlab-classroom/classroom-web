React = require 'react'
AppBar = require 'material-ui/lib/app-bar'
IconButton = require 'material-ui/lib/icon-button'
NavigationClose = require 'material-ui/lib/svg-icons/navigation/close'
IconMenu = require 'material-ui/lib/menus/icon-menu'
ExpandMoreIcon = require 'material-ui/lib/svg-icons/navigation/expand-more'
MenuItem = require 'material-ui/lib/menus/menu-item'
FlatButton = require 'material-ui/lib/flat-button'


MyAppBar = React.createClass
  render: =>
    <AppBar title='GitLab Classroom'
            iconElementRight={
              <IconMenu iconButtonElement={
                          <FlatButton label='__htc_the_constructor'
                                      labelPosition='before'
                                      icon={<ExpandMoreIcon />}
                                      style={color:'#FFF',padding:'14px 0',border:0,marginTop:-8}/>
                        }
                        targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
              <MenuItem primaryText='Refresh' />
              <MenuItem primaryText='Help' />
              <MenuItem primaryText='Sign out' />
              </IconMenu>
            }
            style={position:'fixed',top:0,left:0,right:0}
    ></AppBar>

module.exports = MyAppBar
