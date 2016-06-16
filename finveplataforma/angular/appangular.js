var app = angular.module("Finve", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "../theme/homefinve.html",
        controller: "MainCtrl"
    }).when("/contacto", {
        templateUrl: "../theme/contactofinve.html",
        controller: "ContactoController"
    })
});

app.directive('footerFinve', function () {
    return {
        restrict: 'AE',
        //      replace: 'true',
        templateUrl: "footer.html"
    };
});

app.directive("navbarFinve", function () {
    return {
        restric: "EA",
        templateUrl: "navbar.html"

    };

})

app.controller("MainCtrl", ["$scope", function ($scope) {

}]);

app.controller("ContactoController", ["$scope", function ($scope) {

}]);