'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CategoryCtrl($scope, $modal) {
  // ViewModel
  //var vm = this;
  $scope.category = {};
  $scope.categories = [{
    type: 'Bla',
    group: 'Chalablau',
    name: 'Test'
  },
    {
      type: 'Bla 2',
      group: 'Chalablau 2',
      name: 'Test 2'
    },
    {
      type: 'Bla 3',
      group: 'Chalablau 3',
      name: 'Test 3'
    }];

  $scope.openCategoryModal = function () {
    var categoryModalInstance = $modal.open({
      animation: true,
      templateUrl: 'category/categoryModal.html',
      controller: 'CategoryModalCtrl',
      size: 'sm',
      resolve: {
        categories: function () {
          return $scope.categories;
        }
      }
    });

    categoryModalInstance.result.then(function (selectedItem) {
      $scope.categories.push(selectedItem);
    }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
  };


}

controllersModule.controller('CategoryCtrl', CategoryCtrl);