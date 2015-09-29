'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $provide) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login.html',
      title: 'Login'
    })
    .state('app', {
      url: '/',
      templateUrl: 'home.html',
      title: 'Home'
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
      title: 'Novo de post',
      params: {post : null}
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
      params: {recipe : null}
    })
    .state('app.comments', {
      url: 'comments',
      controller: 'CommentCtrl as commentCtrl',
      templateUrl: 'comments/comments.html',
      title: 'Gerenciar comentários'
    });

  $urlRouterProvider.otherwise('/');   
}

module.exports = OnConfig;