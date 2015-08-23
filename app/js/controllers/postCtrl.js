'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function PostCtrl(CategoryService, PostService, $stateParams, $state) {
  var vm = this;
  vm.categories = CategoryService.Category.findAll();
  vm.posts = PostService.Post.findAll();
  vm.post = $stateParams.post != null ? $stateParams.post : {};
  vm.post.type = "POST";
  
  vm.saveAsDraft = function () {
    PostService.saveOrUpdate(vm.post).$promise.then(function () {
      $state.go('posts');
    });
  };
  
  vm.publish = function () {
    vm.post.published = true;
    PostService.saveOrUpdate(vm.post).$promise.then(function () {
      $state.go('post');
    });
  };
  
  vm.preview = function () {
    //TODO
  };
  
  vm.remove = function (post) {
    PostService.Post.delete({ id: post.id }).$promise.then(function () {
      vm.posts = PostService.Post.findAll();
    });
  };
}

controllersModule.controller('PostCtrl', PostCtrl);