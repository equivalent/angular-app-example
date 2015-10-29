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
    $scope.cancelCreating();
    $scope.cancelEditing();
  };

  function isCurrentCategory(category) {
    return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
  };

  $scope.setCurrentCategory = setCurrentCategory;
  $scope.isCurrentCategory  = isCurrentCategory;

  // creating and editting states
  //
  $scope.isCreating = true;
  $scope.isEditing = false;

  function startCreating(){
    $scope.isCreating = true;
    $scope.isEditing = false;
  }

  function cancelCreating(){
    $scope.isCreating = false;
  }

  function startEditing(){
    $scope.isCreating = false;
    $scope.isEditing = true;
  }

  function cancelEditing(){
    $scope.isEditing = false;
  }

  function shouldShowCreating() {
    return $scope.currentCategory && !$scope.isEditing;
  }

  function shouldShowEditing() {
    return $scope.isEditing && !$scope.isCreating;
  }

  $scope.startCreating      = startCreating;
  $scope.startEditing       = startEditing;
  $scope.cancelCreating     = cancelCreating;
  $scope.cancelEditing      = cancelEditing;
  $scope.shouldShowCreating = shouldShowCreating;
  $scope.shouldShowEditing  = shouldShowEditing;

});
