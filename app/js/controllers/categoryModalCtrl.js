'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CategoryModalCtrl($scope, $modalInstance, $sce, categories) {

  $scope.categories = categories;
  $scope.category = {};
  
  $scope.saveCategory = function () {
    $modalInstance.close($scope.category);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

}

controllersModule.controller('CategoryModalCtrl', CategoryModalCtrl);