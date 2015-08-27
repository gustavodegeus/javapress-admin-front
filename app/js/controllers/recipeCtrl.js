'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function RecipeCtrl($stateParams, $state, CategoryService, RecipeService) {
	var vm = this;
	vm.categories = CategoryService.Category.findAll();
	vm.recipes = RecipeService.Recipe.findAll();
	vm.recipe = $stateParams.recipe != null ? $stateParams.recipe : {};
	vm.recipe.type = "RECIPE";

	vm.addStep = function (recipeStep) {
		if(vm.recipe.steps) {
		return vm.recipe.steps.push({ description: recipeStep });			
		}
		vm.recipe.steps = [{ description: recipeStep }];	
	};

	vm.addIngredient = function (recipeIngredient) {
		if (vm.recipe.ingredients) {
			return vm.recipe.ingredients.push({ description: recipeIngredient });
		}
		vm.recipe.ingredients = [{ description: recipeIngredient }];
	};

	vm.removeStep = function (index) {
		vm.recipe.steps.splice(index, 1)
	};

	vm.removeIngredient = function (index) {
		vm.recipe.ingredients.splice(index, 1);
	};

	vm.saveAsDraft = function () {
		RecipeService.saveOrUpdate(vm.recipe).$promise.then(function () {
			$state.go('recipe');
		});
	};

	vm.publish = function () {
		vm.recipe.published = true;
		RecipeService.saveOrUpdate(vm.recipe).$promise.then(function () {
			$state.go('recipe');
		});
	};

	vm.preview = function () {
		//TODO
	};

	vm.remove = function (recipe) {
		RecipeService.Recipe.delete({ id: recipe.id }).$promise.then(function () {
			vm.recipes = RecipeService.Recipe.findAll();
		});
	};
}


controllersModule.controller('RecipeCtrl', RecipeCtrl);