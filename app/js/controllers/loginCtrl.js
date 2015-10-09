'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function LoginCtrl(UserService, AppSettings, store, $state) {
  var vm = this;
  vm.errorMsg = "";
  vm.login = function (username, password) {
    vm.errorMsg = "";
    UserService.autenticate(username, password).then(function (response) {
      store.set(AppSettings.jwtKey, response.headers("Authorization"));
      $state.go('app');
    }, function (error) {
      console.error(error.data);
      vm.errorMsg = error.data.error;
    });
  };
}

controllersModule.controller('LoginCtrl', LoginCtrl);