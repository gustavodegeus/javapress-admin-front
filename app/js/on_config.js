'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })
    .state('category', {
    url: '/category',
    controller: 'CategoryCtrl as categoryCtrl',
    templateUrl: 'category/category.html',
    title: 'Cadastro de categorias'
  });

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;