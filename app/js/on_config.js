'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $provide) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('Home', {
      url: '/',
      controller: 'ExampleCtrl as home',
      templateUrl: 'home.html',
      title: 'Home'
    })
    .state('category', {
      url: '/category',
      controller: 'CategoryCtrl as categoryCtrl',
      templateUrl: 'category/category.html',
      title: 'Cadastro de categorias'
    })
    .state('post', {
      url: '/post',
      controller: 'PostCtrl as postCtrl',
      templateUrl: 'post/posts.html',
      title: 'Cadastro de posts'
    })
    .state('new-post', {
      url: '/new-post',
      controller: 'PostCtrl as postCtrl',
      templateUrl: 'post/new-post.html',
      title: 'Novo de post',
      params: {post : null}
    })
     .state('recipe', {
      url: '/recipe',
      controller: 'RecipeCtrl as recipeCtrl',
      templateUrl: 'recipe/recipes.html',
      title: 'Cadastro de receitas'
    })
    .state('new-recipe', {
      url: '/new-recipe',
      controller: 'RecipeCtrl as recipeCtrl',
      templateUrl: 'recipe/new-recipe.html',
      title: 'Nova receita',
      params: {recipe : null}
    })
    .state('comments', {
      url: '/comments',
      controller: 'CommentCtrl as commentCtrl',
      templateUrl: 'comments/comments.html',
      title: 'Gerenciar comentários'
    });

  $urlRouterProvider.otherwise('/');
  
  $provide.decorator('taOptions', ['$delegate', function(taOptions){
            // $delegate is the taOptions we are decorating
            // here we override the default toolbars and classes specified in taOptions.
            taOptions.toolbar = [
                ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
                ['justifyLeft','justifyCenter','justifyRight', 'justifyFull'],
                ['html', 'insertImage', 'insertLink']
            ];            
            return taOptions; // whatever you return will be the taOptions
        }]);     
}

module.exports = OnConfig;