'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CommentCtrl(CommentService, $modal) {
	var vm = this;
	vm.comments = CommentService.Comment.findAll();
	vm.activePosition;
	
	vm.changePublishStatus = function (comment) {
		comment.published = !comment.published
		CommentService.Comment.update({}, comment);
	};

	vm.toggleDetail = function($index) {
        //$scope.isVisible = $scope.isVisible == 0 ? true : false;
        vm.activePosition = vm.activePosition == $index ? -1 : $index;
    };

	vm.reply = function (comment) {
		var replyCommentModalInstance = $modal.open({
			animation: true,
			templateUrl: 'comments/reply-comment-modal.html',
			controller: 'CommentModalCtrl as commentModalCtrl',
			size: 'lg',
			resolve: {
				commentToReply: function () {
					return comment;
				}
			}
		});

		replyCommentModalInstance.result.then(function (commentResponse) {
			
		}, function () {
			console.log('Modal dismissed at: ' + new Date());
		});
	};

	vm.showDetails = function (comment) {

	};

	vm.remove = function (comment) {
		CommentService.Comment.delete({ id: comment.id }).$promise.then(function () {
			vm.comments = CommentService.Comment.findAll();
		});
	};
}


controllersModule.controller('CommentCtrl', CommentCtrl);