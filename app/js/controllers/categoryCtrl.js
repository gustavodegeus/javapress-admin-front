'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CategoryCtrl($scope, $modal) {
  // ViewModel
  //var vm = this;
  
  $scope.category = {
    type: 'Bla',
    group: 'Chalablau',
    name: 'Test'
  };
  
  $scope.openCategoryModal = function () {
    $modal.open({
      animation: true,      
      templateUrl: 'category/categoryModal.html',
      size: 'sm'
    });
  };
}

controllersModule.controller('CategoryCtrl', CategoryCtrl);