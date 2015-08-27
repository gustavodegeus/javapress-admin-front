'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('angular-bootstrap');
require('ng-ui-select');
require('angular-resource');
//Workarround to TextAngular works
window.rangy = require('rangy');
window.rangy.saveSelection = require('rangy/lib/rangy-selectionsaverestore');
require('textangular');
require('textangular/dist/textAngular-rangy.min');
require('textangular/dist/textAngular-sanitize.min');
require('ng-tags-input');
require('angular-drag-and-drop-lists');
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
    'textAngular',
    'ngTagsInput',
    'dndLists',
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