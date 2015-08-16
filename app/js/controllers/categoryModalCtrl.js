'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CategoryModalCtrl($modalInstance, CategoryService, category, title) {
  var vm = this;
  vm.title = title;
  vm.category = category;
  vm.categoryGroups = CategoryService.Group.query();
  vm.categoryTypes = CategoryService.findTypes();
  
  vm.saveCategory = function () {
    if (!vm.categoryForm.$invalid) {
      $modalInstance.close(vm.category);
    }
  };

  vm.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}

controllersModule.controller('CategoryModalCtrl', CategoryModalCtrl);