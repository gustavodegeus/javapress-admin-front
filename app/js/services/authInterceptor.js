'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function AuthInterceptor($q, AppSettings, store, $injector) {

	var AuthInterceptor = {};
	AuthInterceptor.responseError = function (response) {
		if (response.status === 401 || response.status === 403) {
			store.remove(AppSettings.jwtKey)
			$injector.get('$state').go('login');
		}
		if(response.status === 404){
			$injector.get('$state').go('error');
		}
        return $q.reject(response);
	};
	return AuthInterceptor;
}
servicesModule.factory('AuthInterceptor', AuthInterceptor);