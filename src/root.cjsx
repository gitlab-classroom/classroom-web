React = require 'react'
{ Router, Route } = require 'react-router'
History = require 'history'
DocumentTitle = require 'react-document-title'

LoginPage = require './login'

App = React.createClass
  render: ->
    <DocumentTitle title='Gitlab Classroom'>
      <div className='App'>
        {this.props.children}
      </div>
    </DocumentTitle>

Root = React.createClass
  render: ->
    <Router history={History.createHistory()}>
      <Route name='approot' path='/classroom/' component={App}>
        <Route name='login' path='login' component={LoginPage} />
      </Route>
    </Router>

module.exports = Root
