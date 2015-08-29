'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function CommentService(AppSettings, $resource) {

  var CommentService = {};

  CommentService.Comment = 
     $resource(AppSettings.apiUrl + 'comment/:id', null,
      {
        'create': { method: 'POST' },
        'findAll': { method: 'GET', 
                     isArray: true,
                     url: AppSettings.apiUrl + 'comments'    
                   },
        'get': { method: 'GET', isArray: false },
        'update': { method: 'PUT' },
        'delete': { method: 'DELETE' }  
      });
  
  CommentService.saveOrUpdate = function (comment) {
    if(comment.id)
    {
      return CommentService.Comment.update({}, comment);        
    }
    return CommentService.Comment.create({}, comment);
  }
  return CommentService;

}

servicesModule.factory('CommentService', CommentService);