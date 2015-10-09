'use strict';

var directivesModule = require('./_index.js');

/**
 * @ngInject
 */
function appHeader() {

  return {
    restrict: 'A',
    replace: true,
    templateUrl: "header.html",
    controller: "HeaderCtrl as headerCtrl"
  };


}

directivesModule.directive('appHeader', appHeader);