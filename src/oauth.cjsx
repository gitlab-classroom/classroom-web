Hello = require('./hello')

Hello.init
	gitlab:
		name: 'Fdu Gitlab'

		oauth:
			version: 2,
			auth: 'https://git.fdu13ss.org/oauth/authorize'
			grant: 'https://git.fdu13ss.org/oauth/access_token'

		scope:
			basic: ''
			email: 'email'
			offline_access: 'offline'

		refresh: true

		login: (p) ->
			p.qs.display = window.navigator &&
				window.navigator.userAgent &&
				/ipad|phone|phone|android/.test(window.navigator.userAgent.toLowerCase()) ? 'mobile' : 'popup'

		base: 'https://git.fdu13ss.org/api/v3/'

		xhr: true

		jsonp: true

		form: false

Hello.init
  gitlab: 'bd55527055f19da6cee7d9fc97124f8b471675b33c25e93dd2d6a3e0273fe099'

module.exports = Hello
