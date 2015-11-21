React = require 'react'
ReactDOM = require 'react-dom'

HelloWorld = React.createClass
  render: ->
    <div>Hello World!</div>

ReactDOM.render <HelloWorld />, document.getElementById('hello-world')
