'use strict';
var angular = require('angular');
// angular modules
require('angular-ui-router');
require('angular-bootstrap');
require('ng-ui-select');
require('angular-resource');
require('ng-tags-input');
require('angular-drag-and-drop-lists');
require('angular-utils-pagination');
require('angular-ckeditor');
require('angular-jwt');
require('angular-storage');
require('./templates');
require('./controllers/_index');
require('./services/_index');
require('./directives/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'ui.bootstrap',
    'ui.select',
    'ngResource',
    'ngTagsInput',
    'dndLists',
    'angularUtils.directives.dirPagination',
    'ckeditor',
    'angular-jwt',
    'angular-storage',
    'templates',
    'app.controllers',
    'app.services',
    'app.directives'
  ];
  // mount on window for testing
  window.app = angular.module('app', requires); 
  angular.module('app').constant('AppSettings', require('./constants'));
  angular.module('app').config(require('./on_config'));
  angular.module('app').run(require('./on_run'));
  angular.bootstrap(document, ['app']);

});