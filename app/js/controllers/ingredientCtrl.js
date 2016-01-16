'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function IngredientCtrl($modal, $log, IngredientService) {
  // ViewModel
  var vm = this;
  vm.errorMessage = null;
  vm.ingredient = {};
  vm.ingredients = [];

  vm.loadIngredients = function (ingredients) {
    if (ingredients) {
      vm.ingredients = ingredients;
      return;
    }
    vm.ingredients = IngredientService.Ingredient.findAll();
  };

  vm.findIngredients = function () {
    var requestParams = IngredientService.buildRequestParams(vm.ingredient);
    vm.loadIngredients(IngredientService.Ingredient.findAll(requestParams));
    vm.clearAlert();
  };

  vm.editIngredient = function (ingredient) {
    vm.openIngredientModal(ingredient, 'Editar Ingrediente');
  };

  vm.removeIngredient = function (ingredient) {
    IngredientService.Ingredient.delete({ id: ingredient.id }).$promise.then(function () {
      vm.loadIngredients();
      vm.addAlert("Ingrediente excluído com sucesso.","success");
    }).catch(function(e){
      vm.addAlert(e.data.message,"danger");
    });
  };

  vm.addIngredient = function () {
    vm.openIngredientModal({}, 'Novo Ingrediente');
  };

  vm.openIngredientModal = function (ingredient, title) {
    var IngredientModalInstance = $modal.open({
      animation: true,
      templateUrl: 'ingredient/ingredient-modal.html',
      controller: 'IngredientModalCtrl as ingredientModalCtrl',
      size: 'md',
      resolve: {
        ingredient: function () {
          return ingredient;
        },
        title: function () {
          return title;
        }
      }
    });

    IngredientModalInstance.result.then(function (selectedItem) {
      if (selectedItem.id) {
        IngredientService.Ingredient.update({}, selectedItem).$promise.then(function () {
          vm.addAlert("Ingrediente alterado com sucesso","success");
          vm.loadIngredients();
        });
        return;
      }
      IngredientService.Ingredient.create({}, selectedItem).$promise.then(function () {
        vm.loadIngredients();
        vm.addAlert("Ingrediente adicionado com sucesso","success");
        
      }).catch(function(e){
        vm.addAlert(e.data.message,"danger");
      })
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };
  
  vm.addAlert = function(message,type){
    vm.errorMessage = {"message": message, "type": type};
  }
  
  vm.clearAlert = function(){
    vm.errorMessage = null;
  }

  vm.loadIngredients();
}
controllersModule.controller('IngredientCtrl', IngredientCtrl);