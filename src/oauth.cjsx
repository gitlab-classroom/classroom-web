# hello.init
#     gitlab:
#       name: 'GitHub',
#       oauth: {
#         version: 2,
#         auth: 'https://git.fdu13ss.org/oauth/authorize',
#         grant: 'https://git.fdu13ss.org/oauth/access_token',
#         response_type: 'code'
#       }
#       scope:
#         email: 'user:email'
#       base: 'https://git.fdu13ss.org/',
#
# hello.init
#   gitlab: 'bd55527055f19da6cee7d9fc97124f8b471675b33c25e93dd2d6a3e0273fe099'
# ,
#   redirect_uri: 'http://localhost:8000/classroom/login'
#
# module.exports = hello('gitlab')

ClientOAuth2 = require 'client-oauth2'

GitlabAuth = new ClientOAuth2
  clientId: 'bd55527055f19da6cee7d9fc97124f8b471675b33c25e93dd2d6a3e0273fe099'
  clientScerit: 'c27d94f6c609aa11451ec9cef50909422ebd3f31d15bf7644dbc12a7ea224168',
  accessTokenUri: 'https://git.fdu13ss.org/oauth/token',
  authorizationUri: 'https://git.fdu13ss.org/oauth/authorize',
  redirectUri: 'http://localhost:8000/login.html'
  authorizationGrants: 'credentials',
  scopes: ['api']

module.exports = GitlabAuth
