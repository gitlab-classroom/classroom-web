React = require 'react'
ReactDOM = require 'react-dom'
injectTapEventPlugin = require 'react-tap-event-plugin';


Login = require './page/login'

HelloWorld = React.createClass
  render: ->
    <div>Hello World!</div>

injectTapEventPlugin()
ReactDOM.render <Login />, document.getElementById('hello-world')
