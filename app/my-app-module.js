angular.module('MyAppModule', [])
.controller('MainController', function($scope){
  $scope.heading = "Hello World";

  $scope.categories = [
    { "id": 1, "name": "Blogs" },
    { "id": 2, "name": "Github" },
    { "id": 3, "name": "Social" }
  ];

  $scope.bookmarks = [
    { "id": 1, "name": "Eq8", "url": "http://www.eq8.eu", "category":"Blogs" },
    { "id": 2, "name": "Scrapbook", "url": "https://github.com/equivalent/scrapbook2", "category":"Github" },
    { "id": 3, "name": "Angular example", "url": "https://github.com/equivalent/angular-app-example", "category":"Github" }
  ];

  $scope.currentCategory = null;

  function setCurrentCategory(category) {
    $scope.currentCategory = category;
  };

  function isCurrentCategory(category) {
    return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
  };

  $scope.setCurrentCategory = setCurrentCategory;
  $scope.isCurrentCategory  = isCurrentCategory;
});
