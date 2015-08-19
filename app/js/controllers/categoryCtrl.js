'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CategoryCtrl($modal, $log, CategoryService) {
  // ViewModel
  var vm = this;
  vm.category = {};
  vm.categoryGroups = [];
  vm.categoryTypes = CategoryService.findTypes();
  vm.categories = [];
  //Pagination fields
  vm.filteredCategories = [];
  vm.totalItems = vm.categories.length;
  vm.currentPage = 1;
  vm.numPerPage = 10;
  vm.maxSize = 5;

  vm.loadGroups = function() {
    vm.categoryGroups = CategoryService.loadGroups(vm.category.type);
  };

  vm.loadCategories = function (categories) {
    if (categories) {
      vm.categories = categories;
    } else {
      vm.categories = CategoryService.Category.findAll();
    }
    vm.filteredCategories = vm.categories;
  };

  vm.pageChanged = function () {
    var begin = ((vm.currentPage - 1) * vm.numPerPage);
    var end = begin + vm.numPerPage;
    vm.filteredCategories = vm.categories.slice(begin, end);
  };

  vm.findCategories = function () {
    var requestParams = CategoryService.buildRequestParams(vm.category);
    vm.loadCategories(CategoryService.Category.findAll(requestParams));
  };

  vm.editCategory = function (category) {
    vm.openCategoryModal(category, 'Editar Categoria');
  };

  vm.removeCategory = function (category) {
    CategoryService.Category.delete({ id: category.id }).$promise.then(function () {
      vm.loadCategories();
    });
  };

  vm.addCategory = function () {
    vm.openCategoryModal({}, 'Nova Categoria');
  };

  vm.openCategoryModal = function (category, title) {
    var categoryModalInstance = $modal.open({
      animation: true,
      templateUrl: 'category/category-modal.html',
      controller: 'CategoryModalCtrl as categoryModalCtrl',
      size: 'sm',
      resolve: {
        category: function () {
          return category;
        },
        title: function () {
          return title;
        }
      }
    });

    categoryModalInstance.result.then(function (selectedItem) {
      if (selectedItem.id) {
        CategoryService.Category.update({}, selectedItem).$promise.then(function () {
          vm.loadCategories();
        });
        return;
      }
      CategoryService.Category.create({}, selectedItem).$promise.then(function () {
        vm.loadCategories();
      });
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };

  vm.loadCategories();
  vm.loadGroups();
}
controllersModule.controller('CategoryCtrl', CategoryCtrl);