angular.module('MyAppModule', [])
.controller('MainController', function($scope){
  $scope.heading = "Hello World";

  $scope.categories = [
    { "id": 1, "name": "Food" },
    { "id": 2, "name": "Drinks" },
    { "id": 3, "name": "Desert" }
  ];

  $scope.bookmarks = [
    { "id": 1, "name": "Eq8", "url": "http://www.eq8.eu" },
    { "id": 2, "name": "Scrapbook", "url": "https://github.com/equivalent/scrapbook2" }
  ];
});
