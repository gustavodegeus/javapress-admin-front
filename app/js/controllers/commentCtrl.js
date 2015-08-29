'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CommentCtrl(CommentService, $modal) {
	var vm = this;
	vm.comments = CommentService.Comment.findAll();
	vm.commentToReply = {};

	vm.changePublishStatus = function (comment) {
		comment.published = !comment.published
	};

	vm.reply = function (comment) {
		var categoryModalInstance = $modal.open({
			animation: true,
			templateUrl: 'comments/reply-comment-modal.html',
			controller: 'CommentCtrl as commentCtrl',
			size: 'lg',
			resolve: {
				commentToReply: function () {
					return comment;
				}
			}
		});

		categoryModalInstance.result.then(function (selectedItem) {
			if (selectedItem.id) {
				CategoryService.Category.update({}, selectedItem).$promise.then(function () {
					vm.loadCategories();
				});
				return;
			}
			CategoryService.Category.create({}, selectedItem).$promise.then(function () {
				vm.loadCategories();
			});
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