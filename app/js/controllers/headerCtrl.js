'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HeaderCtrl(store, $state, AppSettings) {
  var vm = this;
  vm.menuClass = "";
  vm.changeMenuClass = function () {
    vm.menuClass = vm.menuClass ? "" : "open";
  };

  vm.logOut = function () {
    store.remove(AppSettings.jwtKey)
    $state.go("login");
  };

}

controllersModule.controller('HeaderCtrl', HeaderCtrl);