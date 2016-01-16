'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function IngredientModalCtrl($modalInstance, IngredientService, ingredient, title) {
  var vm = this;
  vm.title = title;
  vm.ingredient = ingredient;

  vm.saveIngredient = function () {
    if (!vm.ingredientForm.$invalid) {
      $modalInstance.close(vm.ingredient);
    }
  };

  vm.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}

controllersModule.controller('IngredientModalCtrl', IngredientModalCtrl);