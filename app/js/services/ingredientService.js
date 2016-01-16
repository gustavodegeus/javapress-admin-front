'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function IngredientService(AppSettings, $resource) {

  var IngredientService = {};

  IngredientService.Ingredient = 
     $resource(AppSettings.apiUrl + 'ingredient/:id/:name', null,
      {
        'create': { method: 'POST' },
        'findAll': { method: 'GET', 
                     isArray: true,
                     url: AppSettings.apiUrl + 'ingredients'    
                   },
        'get': { method: 'GET', isArray: false },
        'update': { method: 'PUT' },
        'delete': { method: 'DELETE' }  
      });
  
  
  IngredientService.buildRequestParams = function (ingredient) {
    var requestParams = {};
    if (ingredient.description) requestParams.description = ingredient.description;
    
    return requestParams;
  };
  
  return IngredientService;

}

servicesModule.factory('IngredientService', IngredientService);