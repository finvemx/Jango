var app = angular.module("Finve", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "../theme/homefinve.html",
        controller: "MainCtrl"
    })
});

app.directive('footerFinve', function() {
  return {
      restrict: 'AE',
//      replace: 'true',
      templateUrl: "footer.html"
  };
});

app.controller("MainCtrl", ["$scope", function ($scope) {

}])