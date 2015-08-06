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

  vm.editCategory = function (category) {
    vm.openCategoryModal(category, 'Editar Categoria');
  };

  vm.removeCategory = function (category) {
    // CategoryService.removeCategory(category.id);    
    vm.categories.splice(vm.categories.indexOf(category), 1);
  };
  
  vm.addCategory = function () {
    vm.openCategoryModal({}, 'Nova Categoria');
  };

  vm.openCategoryModal = function (category, title) {
     var categoryModalInstance = $modal.open({
       animation: true,
      templateUrl: 'category/categoryModal.html',
       controller: 'CategoryModalCtrl as categoryModalCtrl',
       size: 'sm',
       resolve: {
        category: function () {
          return category;
        },
        title: function() {
          return title;
        }
       }       
     });
 
     categoryModalInstance.result.then(function (selectedItem) {
       vm.categories.push(selectedItem);
     }, function () {
         console.log('Modal dismissed at: ' + new Date());
       }  );
  };
}
controllersModule.controller('CategoryCtrl', CategoryCtrl);