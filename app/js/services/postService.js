'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function PostService(AppSettings, $resource) {

  var PostService = {};

  PostService.Post = 
     $resource(AppSettings.apiUrl + 'post/:id/:title/:categoryId', null,
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
  
  PostService.saveOrUpdate = function (post) {
    if(post.id)
    {
      return PostService.Post.update({}, post);        
    }
    return PostService.Post.create({}, post);
  }
  return PostService;

}

servicesModule.factory('PostService', PostService);