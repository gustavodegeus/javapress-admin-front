'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function UserService(AppSettings, $http) {

	var UserService = {};

	UserService.autenticate = function (username, password) {
		return $http.post(
			AppSettings.apiUrl + 'login',
			{ 'email': username, 'password': password }
			);
	};

	return UserService;
}
servicesModule.factory('UserService', UserService);