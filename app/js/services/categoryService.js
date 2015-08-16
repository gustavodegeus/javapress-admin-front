'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function CategoryService(AppSettings, $resource) {

  var CategoryService = {};

  CategoryService.Category = 
     $resource(AppSettings.apiUrl + 'category/:id/:name/:type/:parentName', null,
      {
        'create': { method: 'POST' },
        'findAll': { method: 'GET', 
                     isArray: true,
                     url: AppSettings.apiUrl + '/categories'    
                   },
        'get': { method: 'GET', isArray: false },
        'update': { method: 'PUT' },
        'delete': { method: 'DELETE' }  
      });
  
  CategoryService.Group = $resource(AppSettings.apiUrl + 'categories');
  
  CategoryService.findTypes = function () {
    return ["POST", "RECIPE"];
  };

  CategoryService.buildRequestParams = function (category) {
    var requestParams = {};
    if (category.type) requestParams.type = category.type;
    if (category.name) requestParams.name = category.name;
    if (category.parent) requestParams.parentName = category.parent.name;

    return requestParams;
  };

  return CategoryService;

}

servicesModule.factory('CategoryService', CategoryService);