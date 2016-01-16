'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, jwtInterceptorProvider) {

  jwtInterceptorProvider.tokenGetter = function (store) {
    return store.get('jwt');
  };
  $httpProvider.interceptors.push('jwtInterceptor');
  $httpProvider.interceptors.push('AuthInterceptor');

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login.html',
      title: 'Login',
      controller: 'LoginCtrl as loginCtrl',
      data: {
        requiresLogin: false
      }
    })
    .state('error', {
      url: '/error',
      templateUrl: 'error.html',
      title: 'Error',
      data: {
        requiresLogin: false
      }
    })
    .state('app', {
      url: '/',
      templateUrl: 'home.html',
      title: 'Home',
      data: {
        requiresLogin: true
      }
    })
    .state('app.category', {
      url: 'category',
      controller: 'CategoryCtrl as categoryCtrl',
      templateUrl: 'category/category.html',
      title: 'Cadastro de categorias'
    })
    .state('app.post', {
      url: 'post',
      controller: 'PostCtrl as postCtrl',
      templateUrl: 'post/posts.html',
      title: 'Cadastro de posts'
    })
    .state('app.new-post', {
      url: 'new-post',
      controller: 'PostCtrl as postCtrl',
      templateUrl: 'post/new-post.html',
      title: 'Novo post',
      params: { post: null }
    })
    .state('app.recipe', {
      url: 'recipe',
      controller: 'RecipeCtrl as recipeCtrl',
      templateUrl: 'recipe/recipes.html',
      title: 'Cadastro de receitas'
    })
    .state('app.new-recipe', {
      url: 'new-recipe',
      controller: 'RecipeCtrl as recipeCtrl',
      templateUrl: 'recipe/new-recipe.html',
      title: 'Nova receita',
      params: { recipe: null }
    })
    .state('app.comments', {
      url: 'comments',
      controller: 'CommentCtrl as commentCtrl',
      templateUrl: 'comments/comments.html',
      title: 'Gerenciar comentários'
    })
    .state('app.ingredient', {
      url: 'ingredient',
      controller: 'IngredientCtrl as ingredientCtrl',
      templateUrl: 'ingredient/ingredients.html',
      title: 'Cadastro de Ingredientes'
    });

  $urlRouterProvider.otherwise('/');
}

module.exports = OnConfig;