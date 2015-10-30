angular.module('categories', [
  'myApp.models.categories'
])
  .config(function($stateProvider){
    $stateProvider
      .state('myApp.categories', {
        url: '/',
        views: {
          'categories@': {
            controller: 'CategoriesController',
            templateUrl: 'app/categories/categories.tmpl.html'
          },
          'bookmarks@': {
            controller: 'BookmarksController',
            templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
          }
        }
      })
  })
  .controller('CategoriesController', function CategoriesController($scope) {
  })
  .controller('BookmarksController', function BookmarksController($scope) {
  })
;
