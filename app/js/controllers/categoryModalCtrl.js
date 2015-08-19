'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CategoryModalCtrl($modalInstance, CategoryService, category, title) {
  var vm = this;
  vm.title = title;
  vm.category = category;
  vm.categoryGroups = [];
  vm.categoryTypes = CategoryService.findTypes();
  
  vm.loadGroups = function () {
    vm.categoryGroups = CategoryService.loadGroups(vm.category.type);
  };
  
  vm.saveCategory = function () {
    if (!vm.categoryForm.$invalid) {
      $modalInstance.close(vm.category);
    }
  };

  vm.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  
  vm.loadGroups();
}

controllersModule.controller('CategoryModalCtrl', CategoryModalCtrl);