'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function CategoryService(AppSettings) {
  
  var CategoryService = {};
  CategoryService.someValue = '';
  CategoryService.findCategoryGroups = function(){
    return ["Post", "Receita"];  
  };
  
  CategoryService.findCategoryTypes = function(){
    return ["Aves", "Lugares", "Massas", "Utilidades"];  
  };
  
  CategoryService.findCategories = function () {
    return [{
    id: 1,
    type: 'Lugares',
    group: 'Post',
    name: 'Lugares'
  },
    {
      id: 2,
      type: 'Utilidades',
      group: 'Post',
      name: 'Batedeira'
    },
    {
      id: 3,
      type: 'Ave',
      group: 'Receita',
      name: 'Frango'
    }];
  };
  return CategoryService;
  
}

servicesModule.factory('CategoryService', CategoryService);