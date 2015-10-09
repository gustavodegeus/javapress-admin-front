'use strict';

/**
 * @ngInject
 */
function OnRun($rootScope, $state, AppSettings, store, jwtHelper) {
  
  // check if login is needed
  $rootScope.$on('$stateChangeStart', function (event, toState) {
    if (toState.data && toState.data.requiresLogin) {
      if (!store.get(AppSettings.jwtKey) || jwtHelper.isTokenExpired(store.get(AppSettings.jwtKey))) {
        event.preventDefault();
        store.remove(AppSettings.jwtKey);
        $state.go('login');
      }
    }
  });
  

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', function (event, toState) {
    $rootScope.pageTitle = '';

    if (toState.title) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2015 ';
    }

    $rootScope.pageTitle += AppSettings.appTitle;
  });

}

module.exports = OnRun;