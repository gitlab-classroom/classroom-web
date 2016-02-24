React = require 'react'
Isvg = require 'react-inlinesvg'

Logo = React.createClass
  render: ->
    <Isvg src="/classroom/assets/logo.svg"/>

module.exports = Logo
