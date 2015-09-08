(function () {
    var app = angular.module("searcher");

    var UserController = function ($scope, githubUserService, $routeParams, $log) {

        $log.info("User Ctrl");

        var mapUserDetails = function (data) {
            $scope.user = data;
            githubUserService.getUserRepositories(data)
                             .then(mapRepository);
            $scope.error = null;
        };

        var mapRepository = function (data) {
            $scope.repos = data;
        };

        var onError = function (reason) {
            $scope.error = "User not found.";
        };

        githubUserService.getUserDetails($routeParams.username)
                         .then(mapUserDetails, onError);

        $scope.direction = true;
        $scope.sortOrder = "name";
        $scope.sort = function (column) {
            column.active;
            if ($scope.sortOrder === column) {
                $scope.direction = !$scope.direction;
            } else {
                $scope.sortOrder = column;
                $scope.direction = true;
            }
        };
    };

    app.controller("UserController", UserController);

}());