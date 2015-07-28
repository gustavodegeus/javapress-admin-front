'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CategoryCtrl($modal, CategoryService) {
  // ViewModel
  var vm = this;
  vm.category = {};
  vm.categoryGroups = CategoryService.findCategoryGroups();
  vm.categoryTypes = CategoryService.findCategoryTypes();
  vm.categories = CategoryService.findCategories();

  vm.editCategory = function (event) {
    console.log(event.target);
  }

  vm.removeCategory = function (event) {
    console.log(event.target);
  }

  vm.openCategoryModal = function () {
     var categoryModalInstance = $modal.open({
       animation: true,
      templateUrl: 'category/categoryModal.html',
       controller: 'CategoryModalCtrl as categoryModalCtrl',
       size: 'sm'
     });
 
     categoryModalInstance.result.then(function (selectedItem) {
       vm.categories.push(selectedItem);
     }, function () {
         console.log('Modal dismissed at: ' + new Date());
       });
  };
}
controllersModule.controller('CategoryCtrl', CategoryCtrl);