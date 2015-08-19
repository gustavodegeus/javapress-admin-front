'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function PostCtrl(CategoryService) {
  var vm = this;
  vm.tinymceModel = {};
  vm.category = {};
  vm.tags = [];
  vm.categories = CategoryService.Category.findAll();
}

controllersModule.controller('PostCtrl', PostCtrl);