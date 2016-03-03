React = require 'react'
ReactDOM = require 'react-dom'
injectTapEventPlugin = require 'react-tap-event-plugin'

ReactRouter = require 'react-router'
Router = ReactRouter.Router
Route = ReactRouter.Route
Link = ReactRouter.Link
BrowserHistory = ReactRouter.browserHistory

LoginPage = require './page/login'
ClassPage = require './page/class'
AppBar = require './app-bar'

injectTapEventPlugin()

ReactDOM.render (
  <Router history={BrowserHistory}>
    <Route path="/">
      <Route path="login" component={LoginPage} />
      <Route path="login_redirect" component={LoginPage} />
    </Route>
  </Router>
), document.getElementById 'root-elem'
