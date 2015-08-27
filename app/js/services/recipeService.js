'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function RecipeService(AppSettings, $resource) {

  var RecipeService = {};

  RecipeService.Recipe = 
     $resource(AppSettings.apiUrl + 'recipe/:id/:title/:categoryId', null,
      {
        'create': { method: 'POST' },
        'findAll': { method: 'GET', 
                     isArray: true,
                     url: AppSettings.apiUrl + 'recipes'    
                   },
        'get': { method: 'GET', isArray: false },
        'update': { method: 'PUT' },
        'delete': { method: 'DELETE' }  
      });
  
  RecipeService.saveOrUpdate = function (recipe) {
    if(recipe.id)
    {
      return RecipeService.Recipe.update({}, recipe);        
    }
    return RecipeService.Recipe.create({}, recipe);
  }
  return RecipeService;

}

servicesModule.factory('RecipeService', RecipeService);