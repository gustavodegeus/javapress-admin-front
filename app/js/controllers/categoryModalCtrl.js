'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CategoryModalCtrl($modalInstance, CategoryService) {
  var vm = this;
  vm.category = {};
  vm.categoryGroups = CategoryService.findCategoryGroups();
  vm.categoryTypes = CategoryService.findCategoryTypes();

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