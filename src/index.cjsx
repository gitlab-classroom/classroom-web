React = require 'react'
ReactDOM = require 'react-dom'
injectTapEventPlugin = require 'react-tap-event-plugin';

LoginPage = require './page/login'
ClassPage = require './page/class'
AppBar = require './app-bar'

injectTapEventPlugin()

App = React.createClass
  render: =>
    <div>
      <AppBar />
      <div style={paddingTop:80}>
        <ClassPage />
      </div>
    </div>

ReactDOM.render <LoginPage />, document.getElementById('root-elem')
