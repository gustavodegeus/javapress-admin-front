'use strict';

var directivesModule = require('./_index.js');

/**
 * @ngInject
 */
function onEnter() {

  return {
    restrict: 'EA',
    link: function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if (event.which === 13) {
          scope.$apply(function () {
            scope.$eval(attrs.onEnter);
          });
          if (event.srcElement.type === "text") {
            event.srcElement.value = "";
          }
          event.preventDefault();
        }
      });
    }
  };


}

directivesModule.directive('onEnter', onEnter);