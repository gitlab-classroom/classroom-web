React = require 'react'
ReactDOM = require 'react-dom'
MaterialUI = require 'material-ui'

HelloWorld = React.createClass
  render: ->
    <div>Hello World!</div>

ReactDOM.render <HelloWorld />, $('hello-world')
