(function () {
    var app = angular.module("searcher");

    var RepoController = function ($scope, $log) {

        $log.info("Repo Ctrl");

        $scope.search = function (username) {

        };

    };

    app.controller("RepoController", RepoController);

}());