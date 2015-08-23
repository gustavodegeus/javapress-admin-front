'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function RecipeService(AppSettings, $resource) {

  var RecipeService = {};

  RecipeService.Post = 
     $resource(AppSettings.apiUrl + 'recipe/:id/:title/:categoryId', null,
      {
        'create': { method: 'POST' },
        'findAll': { method: 'GET', 
                     isArray: true,
                     url: AppSettings.apiUrl + 'blogPosts'    
                   },
        'get': { method: 'GET', isArray: false },
        'update': { method: 'PUT' },
        'delete': { method: 'DELETE' }  
      });
  
  RecipeService.saveOrUpdate = function (post) {
    if(post.id)
    {
      return RecipeService.Post.update({}, post);        
    }
    return RecipeService.Post.create({}, post);
  }
  return RecipeService;

}

servicesModule.factory('RecipeService', RecipeService);