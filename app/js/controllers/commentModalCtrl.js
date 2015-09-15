'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CommentModalCtrl($modalInstance, CommentService, commentToReply) {
  var vm = this;
  vm.commentToReply = commentToReply;

  vm.saveReply = function () {
    CommentService.Comment.update({}, vm.commentToReply).$promise.then(function () {
      $modalInstance.close();
    });
  };

  vm.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}

controllersModule.controller('CommentModalCtrl', CommentModalCtrl);